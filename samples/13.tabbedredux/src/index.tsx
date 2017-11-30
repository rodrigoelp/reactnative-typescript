/**
 * What are we trying to do here?
 * 
 * I am trying to understand what redux with react-navigation is going to give me.
 * Based on my understanding, if I resolve a container, then the view is going to
 * be connected and the state is going to be resolved for me.
 * 
 * As a first past, what do I need to do?
 * 
 * 1. Create a store. This store needs to have your app state plus a navigation state
 *      (I am still not clear on what this navigation state is, but is plugged as part
 *       of the router).
 * 2. We need to create a container hosting the navigator of your choosing (for this
 *      example, I am using a StackNavigator). This container is going to have the 
 *      navigation state mentioned above injected into the navigator.
 * 3. Configure the navigator (I called it here RootNavigator), so it knows the routes
 * 4. Create the container or components you want as part of your routes.
 */

import * as React from "react";
import { Provider } from "react-redux";
import { AppRegistry } from "react-native";
import { RootNavigatorContainer } from "./containers";
import { store } from "./store";

/**
 * Application top level, is here where all the redux magic is going to start
 * to work. A provider takes in the store and hosts the very first container
 * (the stack navigator host container)
 */
const App = () => (
    <Provider store={store}>
        <RootNavigatorContainer />
    </Provider>
);
// registering the component to be launched by the native app
AppRegistry.registerComponent("tabbedredux", () => App);
