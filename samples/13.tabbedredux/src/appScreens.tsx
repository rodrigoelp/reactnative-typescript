import * as React from "react";
import { View } from "react-native";
import { TabNavigator, NavigationRouteConfigMap, TabNavigatorConfig } from "react-navigation";
import { TabRouteNames } from "./models";

const routeConfig: NavigationRouteConfigMap = {
    [TabRouteNames.One]: {
        screen: () => (<View style={{ flex: 1, backgroundColor: "red" }}></View>)
    },
    [TabRouteNames.Two]: {
        screen: () => (<View style={{ flex: 1, backgroundColor: "green" }}></View>)
    },
    [TabRouteNames.Three]: {
        screen: () => (<View style={{ flex: 1, backgroundColor: "blue" }}></View>)
    },
};

const tabConfig: TabNavigatorConfig = {
    tabBarOptions: {
        activeTintColor: "black",
    }
};

const AppTabNavigator = TabNavigator(routeConfig, tabConfig);

export { AppTabNavigator };
