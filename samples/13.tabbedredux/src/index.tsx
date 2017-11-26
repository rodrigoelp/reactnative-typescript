import * as React from "react";
import { AppRegistry, View } from "react-native";

class AppShell extends React.Component {
    public render() {
        return (
            <View></View>
        );
    }
}

AppRegistry.registerComponent("tabbedredux", () => AppShell);
