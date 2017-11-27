import * as React from "react";
import { View } from "react-native";


enum RouteNames {
    ScreenOne = "/", // these names are not important, but it needs to be unique.
    ScreenTwo = "/two",
    ScreenThree = "/three",
}

const One = () => { return (<View style={{ flex: 1, backgroundColor: "green" }}></View>) };
const Two = () => { return (<View style={{ flex: 1, backgroundColor: "blue" }}></View>) };
const Three = () => { return (<View style={{ flex: 1, backgroundColor: "red" }}></View>) };

export { RouteNames, One, Two, Three };
