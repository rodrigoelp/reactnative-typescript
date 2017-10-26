import * as React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import { CounterApp } from "../containers";
import { store } from "../store";

const App = () => {
    return (
        <Provider store={store}>
            <CounterApp />
        </Provider>
    );
};

AppRegistry.registerComponent("counterredux", () => App);
