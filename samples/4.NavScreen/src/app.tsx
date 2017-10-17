
import * as React from "react";
import { AppRegistry, View } from "react-native";
import { StackNavigator, StackNavigatorConfig, NavigationRouteConfigMap } from "react-navigation";
import { IScreenOneParams, RouteNames, ScreenOne, ScreenTwo, ScreenThree } from "./screens";
import { appStyles } from "./styles";

/**
 * Describes all possible navigation routes and which screen does that corresponds to.
 * @description: there are three screens only. The one called @see EndOfLineScreen is 
 * never invoked or used.
 * One of the biggest differences I can see between "react-navigation" and the navigator
 * provided by "react-native" is that you won't be able to trigger an invalid route.
 */
const routeConfigMap: NavigationRouteConfigMap = {
    [RouteNames.One]: { path: "root", screen: ScreenOne },
    [RouteNames.Two]: { path: "details", screen: ScreenTwo },
    [RouteNames.Three]: { path: "more", screen: ScreenThree },
};

/**
 * Configuration used to initialize the application. Which screen is going to be loaded and its parameters.
 */
const stackConfig: StackNavigatorConfig = {
    initialRouteName: RouteNames.One,
    initialRouteParams: { nameToDisplay: "Jorah Mormont (Lord of the friendzone)" } as IScreenOneParams
};

/**
 * This creates the StackNavigator we are going to be displaying.
 */
const AppNavigator = StackNavigator(routeConfigMap, stackConfig);

/**
 * Registering the starting point (the stack navigator)
 */
AppRegistry.registerComponent("NavScreen", () => AppNavigator);
