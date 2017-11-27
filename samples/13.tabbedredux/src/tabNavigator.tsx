import * as React from "react";
import { View } from "react-native";
import { TabNavigator, NavigationRouteConfigMap, TabNavigatorConfig } from "react-navigation";
import { RouteNames, One, Two, Three } from "./screens";

const routeConfig: NavigationRouteConfigMap = {
    [RouteNames.ScreenOne]: { screen: One },
    [RouteNames.ScreenTwo]: { screen: Two },
    [RouteNames.ScreenThree]: { screen: Three },
};

const tabConfig: TabNavigatorConfig = {
    tabBarOptions: {
        activeTintColor: "black",
    }
};

const AppTabNavigator = TabNavigator(routeConfig, tabConfig);
export { AppTabNavigator };
