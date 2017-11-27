/**
 * What are we trying to do here?
 * Basically, an application that prevents you from accessing content unless you are authenticated.
 * 
 * How does that translate to the application? we will have an AppShell that will display the login
 * screen for you to authenticate a session and a second screen with some tabbed content.
 * The tabbed content is going to be three screens with different colours.
 * 
 * So, the route map should look something like:
 * /login
 * /secure/one
 * /secure/two
 * /secure/three
 * 
 * This means that '/login' and '/' have been defined in appShell.tsx
 * and '/secure/one', '/secure/two' and '/secure/three' are defined in appScreens.tsx
 */

import * as React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import store from "./store";
import { AppNavigator } from "./appShell";

const App = () => {
    return (
        <Provider store={store}>
            <AppNavigator />
        </Provider>
    );
}

AppRegistry.registerComponent("tabbedredux", () => App);
