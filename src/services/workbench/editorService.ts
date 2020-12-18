import { singleton, container } from 'tsyringe';

import { Component } from 'mo/react';
import { emit } from 'mo/common/event';
import { ITab } from 'mo/components/tabs';
import {
    EditorEvent,
    EditorModel,
    EditorGroupModel,
    IEditor,
    IEditorGroup,
} from 'mo/model';

export interface IEditorService extends Component<IEditor> {
    /**
     * Open a new tab in indicated group instance
     * @param tab Tab data
     * @param groupId group ID
     */
    open<T = any>(tab: ITab, groupId?: number): void;
    onCloseTab(callback: (tabKey?: string) => void);
    onMoveTab(callback: (tabs: ITab[]) => void);
    onSelectTab(callback: (tabKey: string) => void);
}

@singleton()
export class EditorService
    extends Component<IEditor>
    implements IEditorService {
    protected state: IEditor;
    constructor() {
        super();
        this.state = container.resolve(EditorModel);
    }

    @emit(EditorEvent.OnSelectTab)
    onSelectTab(callback: (tabKey: string) => void) {
        this.subscribe(
            EditorEvent.OnSelectTab,
            (targetKey: string, groupId?: number) => {
                let group;
                let { groups } = this.state;
                if (groupId === undefined) return;
                group = groups?.find(
                    (group: IEditorGroup) => group.id === groupId
                );
                group.activeTab = { ...group.activeTab, key: targetKey };
                callback?.(targetKey);
            }
        );
    }

    @emit(EditorEvent.OpenTab)
    public open<T>(tab: ITab, groupId?: number) {
        let { current, groups } = this.state;
        let group: IEditorGroup | undefined = current;
        if (groupId) {
            group = groups.find((group: IEditorGroup) => group.id === groupId);
        }
        if (group) {
            group.tabs.push(tab);
            group.activeTab = tab;
        } else {
            group = new EditorGroupModel(groups.length + 1, tab, [tab]);
            groups.push(group);
            current = group;
        }
    }

    @emit(EditorEvent.OnMoveTab)
    public onMoveTab(callback: (data) => void) {
        this.subscribe(
            EditorEvent.OnMoveTab,
            (tabs: ITab[], groupId?: number) => {
                let { groups } = this.state;
                let group;
                if (groupId === undefined) return;
                group = groups?.find(
                    (group: IEditorGroup) => group.id === groupId
                );
                group.tabs = tabs;
                callback?.(tabs);
            }
        );
    }
    public closeAll() {}

    @emit(EditorEvent.OnCloseTab)
    public onCloseTab(callback: (data) => void) {
        this.subscribe(
            EditorEvent.OnCloseTab,
            (targetKey: string, groupId?: number) => {
                let group, lastIndex;
                let { groups } = this.state;
                if (groupId === undefined) return;
                group = groups?.find(
                    (group: IEditorGroup) => group.id === groupId
                );
                let newActiveKey = group?.activeTab?.key;
                const groupTabs = group.tabs;
                groupTabs.forEach((pane, i) => {
                    if (pane.key === targetKey) {
                        lastIndex = i - 1;
                    }
                });
                const newPanes = groupTabs.filter(
                    (pane) => pane.key !== targetKey
                );
                if (newPanes.length && newActiveKey === targetKey) {
                    if (lastIndex >= 0) {
                        newActiveKey = newPanes[lastIndex].key;
                    } else {
                        newActiveKey = newPanes[0].key;
                    }
                }
                group.tabs = newPanes;
                group.activeTab = { ...group.activeTab, key: newActiveKey };

                callback?.(targetKey);
            }
        );
    }
}
