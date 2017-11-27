import * as React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import { AppTabNavigator } from "./tabNavigator";
import store from "./store";

const AppShell = () => {
    return (
        <Provider store={store}>
            <AppTabNavigator />
        </Provider>
    );
}

AppRegistry.registerComponent("tabbedredux", () => AppShell);
