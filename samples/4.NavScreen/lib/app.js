"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const react_navigation_1 = require("react-navigation");
const screens_1 = require("./screens");
/**
 * Describes all possible navigation routes and which screen does that corresponds to.
 * @description: there are three screens only. The one called @see EndOfLineScreen is
 * never invoked or used.
 * One of the biggest differences I can see between "react-navigation" and the navigator
 * provided by "react-native" is that you won't be able to trigger an invalid route.
 */
const routeConfigMap = {
    [screens_1.RouteNames.One]: { path: "root", screen: screens_1.ScreenOne },
    [screens_1.RouteNames.Two]: { path: "details", screen: screens_1.ScreenTwo },
    [screens_1.RouteNames.Three]: { path: "more", screen: screens_1.ScreenThree },
};
/**
 * Configuration used to initialize the application. Which screen is going to be loaded and its parameters.
 */
const stackConfig = {
    initialRouteName: screens_1.RouteNames.One,
    initialRouteParams: { nameToDisplay: "Jorah Mormont (Lord of the friendzone)" }
};
/**
 * This creates the StackNavigator we are going to be displaying.
 */
const AppNavigator = react_navigation_1.StackNavigator(routeConfigMap, stackConfig);
/**
 * Registering the starting point (the stack navigator)
 */
react_native_1.AppRegistry.registerComponent("NavScreen", () => AppNavigator);
//# sourceMappingURL=app.js.map