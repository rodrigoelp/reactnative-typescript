import * as React from "react"; // you need to import this, otherwise the provider and its children won't work.
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import { AppShell } from "../containers";
import { store } from "../store";

// This bit of the code has not changed.
// The app component is still just hosting a provider with the application data store.
const App = () => {
    return (
        <Provider store={store}>
            <AppShell />
        </Provider>
    );
};

AppRegistry.registerComponent("asyncredux", () => App);

// from here you might want to check ../store.ts
