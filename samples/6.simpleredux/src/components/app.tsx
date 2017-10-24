
import * as React from "react";
import { AppRegistry, View } from "react-native";
import { Provider } from "react-redux";
import UserBoard from "../containers/userBoard";
import UserDetail from "../containers/userDetail";
import { store } from "../stores/store";

/**
 * This is the entry point for the application.
 * It will create a provider (with the data store) to be use in the application.
 * The store wraps all the reducers in the application.
 * 
 * To get to this point, I have created a reducer, then created a store from that reducer and feed it into the provider.
 */
const App = () => {
    return (
        <Provider store={store}>
            <UserBoard />
        </Provider>
    );
}

AppRegistry.registerComponent("simpleredux", () => App);