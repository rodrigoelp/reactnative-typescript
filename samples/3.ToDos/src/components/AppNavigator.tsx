
import * as React from "react";
import {
    addNavigationHelpers,
    NavigationRouteConfigMap,
    NavigationStackAction,
    StackNavigator,
    StackNavigatorConfig,
} from "react-navigation";

import { IListNavigationProp, IListParams } from "./Interfaces";
import { Store } from "./Models/Store";
import EditorScreen from "./Screens/EditorScreen";
import ListScreen from "./Screens/ListScreen";

export enum AppRouteNames {
    ListOfTodos = "ListOfTodos",
    ItemEditor = "TodoItemEditor",
}

const routeConfigMap: NavigationRouteConfigMap = {
    [AppRouteNames.ListOfTodos]: {
        path: "start",
        screen: ListScreen,
    },
    [AppRouteNames.ItemEditor]: {
        path: "next",
        screen: EditorScreen,
    },
};

const initialParams: IListParams = {
    store: new Store(),
};

const navConfig: StackNavigatorConfig = {
    initialRouteName: AppRouteNames.ListOfTodos,
    initialRouteParams: initialParams,
    navigationOptions: {},
};

export const AppNavigator = StackNavigator(
    routeConfigMap,
    navConfig,
);

export const Router = (props: any) => (
    <AppNavigator
        navigation={
            addNavigationHelpers({
                dispatch: (action: NavigationStackAction): boolean => true,
                state: {},
            })
        }
    />
);
