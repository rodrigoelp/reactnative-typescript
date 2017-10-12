
import { NavigationScreenProps } from "react-navigation";
import { Store } from "./Models/Store";
import { guid } from "./SystemTypes";

export enum EditorMode {
    Edit,
    New,
}

export interface ITodoItem {
    id: guid;
    title: string;
}

// tslint:disable-next-line:no-empty-interface
export interface IListParams {
    store: Store;
}

export interface IEditorParams {
    mode: EditorMode;
    item?: ITodoItem;
    store: Store;
}

// tslint:disable-next-line:no-empty-interface
export interface IListNavigationProp extends NavigationScreenProps<IListParams> { }

// tslint:disable-next-line:no-empty-interface
export interface IEditorNavigationProp extends NavigationScreenProps<IEditorParams> { }
