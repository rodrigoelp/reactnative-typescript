
import * as React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import ViewPresenter from "../containers/viewPresenter";
import { store } from "../stores/store";

/**
 * This is the entry point for the application.
 * It will create a provider (with the data store) to be use in the application.
 * The store wraps all the reducers in the application.
 * 
 * To get to this point, I have created a reducer, then created a store from that reducer and feed it into the provider.
 * Introduced a view presenter which will trigger a hacky navigation as I don't want to go through react-nativation at the moment.
 */
const App = () => {
    return (
        <Provider store={store}>
            <ViewPresenter />
        </Provider>
    );
}

AppRegistry.registerComponent("simpleredux", () => App);