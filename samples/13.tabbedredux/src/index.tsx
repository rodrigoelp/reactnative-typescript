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
import { AppRegistry, View, Button, Text } from "react-native";
import { StackNavigator, addNavigationHelpers, StackNavigatorConfig } from "react-navigation";
import { createStore, combineReducers, applyMiddleware, AnyAction, bindActionCreators, Dispatch } from "redux";
import { Provider, connect } from "react-redux";
import { logger } from "redux-logger";

interface IAppState {
    currentCount: number;
    nav: any;
}


const countReducer = (state: number = 42, action: AnyAction): number => {
    console.debug("getting the reducer...");
    return state;
}

const ScreenOne = (props:any) => (
    <View style={{ flex: 1, backgroundColor: "green" }}>
        <Button title="Click me" onPress={() => props.navigation.navigate("Two")} />
    </View>
)

const ScreenTwo = () => (
    <View style={{ flex: 1, backgroundColor: "blue" }}></View>
)

const routeMap = {
    One: { screen: ScreenOne },
    Two: { screen: ScreenTwo }
};
const navConfig: StackNavigatorConfig = {
    initialRouteName: "One",
};
const RootNavigator = StackNavigator(routeMap, navConfig);
const navReducer = (state: any, action: AnyAction) => {
    const newState = RootNavigator.router.getStateForAction(action, state);
    return newState || state;
}

const allReducers = combineReducers({ currentCount: countReducer, nav: navReducer });
const store = createStore(allReducers, applyMiddleware(logger));


interface IAppNavHostProps {
    count: number;
    navState: any;
    dispatch: any;
}

class AppNavigatorHost extends React.Component<IAppNavHostProps> {
    constructor(props: IAppNavHostProps) {
        super(props);
    }

    public render() {
        return <RootNavigator navigation={addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.navState
        })} />;
    }
}

const mapStateToAppNavProps = (state: IAppState) => ({
    count: state.currentCount,
    navState: state.nav,
});

const AppNavigatorContainer = connect(mapStateToAppNavProps)(AppNavigatorHost);

const App = () => (
    <Provider store={store}>
        <AppNavigatorContainer />
    </Provider>
);

AppRegistry.registerComponent("tabbedredux", () => App);
