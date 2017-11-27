import * as React from "react";
import { View } from "react-native";

enum AppRouteNames {
    Login = "/login",
    Home = "/",
}

enum TabRouteNames {
    ScreenOne = "/", // these names are not important, but it needs to be unique.
    ScreenTwo = "/two",
    ScreenThree = "/three",
}

const Login = () => (<View style={{ flex: 1, backgroundColor: "#acacac" }}></View>);
const One = () => { return (<View style={{ flex: 1, backgroundColor: "green" }}></View>) };
const Two = () => { return (<View style={{ flex: 1, backgroundColor: "blue" }}></View>) };
const Three = () => { return (<View style={{ flex: 1, backgroundColor: "red" }}></View>) };

export { TabRouteNames, One, Two, Three };
