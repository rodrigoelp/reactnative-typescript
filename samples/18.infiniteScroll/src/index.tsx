import * as React from "react";
import { AppRegistry } from "react-native";
import { StackNavigator, NavigationRouteConfigMap, StackNavigatorConfig } from "react-navigation";
import { AppShell } from "./app";
import { RouteNames } from "./models";
import { UserDetails } from "./userDetails";

const routeConfigMap: NavigationRouteConfigMap = {
    [RouteNames.UserList]: { path: "/", screen: AppShell },
    [RouteNames.UserDetails]: { path: "/user", screen: UserDetails },
};

const stackConfig: StackNavigatorConfig = {
    initialRouteName: RouteNames.UserList,
    initialRouteParams: {}
}

const AppNavigator = StackNavigator(routeConfigMap, stackConfig);

AppRegistry.registerComponent("infiniteScroll", () => AppNavigator);
