
import * as React from "react";
import { AppRegistry } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { allReducers } from "../reducers";
import { UserBoard } from "../containers/UserBoard";

const store = createStore(allReducers);

/**
 * This is the entry point for the application.
 * It will create a provider (with the data store) to be use in the application.
 * The store wraps all the reducers in the application.
 */
const App = () => {
    return (
        <Provider store={store}>
            <UserBoard />
        </Provider>
    );
}

AppRegistry.registerComponent("simpleredux", () => App);