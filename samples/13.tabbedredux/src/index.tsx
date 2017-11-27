import * as React from "react";
import { AppRegistry, View } from "react-native";
import store from "./store";
import { TabNavigator } from "./tabNavigator";
import { Provider } from "react-redux";

const AppShell = () => {
    return (
        <Provider store={store}>
            <TabNavigator />
        </Provider>
    );
}

AppRegistry.registerComponent("tabbedredux", () => AppShell);
