import * as React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import { AppShell } from "../containers";
import { store } from "../store";

const App = () => {
    return (
        <Provider store={store}>
            <AppShell />
        </Provider>
    );
};

AppRegistry.registerComponent("asyncredux", () => App);
