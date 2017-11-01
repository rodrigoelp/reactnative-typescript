import * as React from "react";
import { AppRegistry, View } from "react-native";
import { AppShell } from "./appShell";

class App extends React.Component {
    public render() {
        return <AppShell /> ;
    }
}

AppRegistry.registerComponent("standardControls", () => App);
