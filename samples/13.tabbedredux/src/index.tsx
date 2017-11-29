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
 *
 * I decided to write everything in a single file (in fact, doing this is a big no-no)
 * but it was easier for me to understand it when the full picture is in front of me
 * as opposed to browsing several files. I will try to delimit the different sections
 * playing here.
 */

import * as React from "react";
import { AnyAction, combineReducers, createStore, applyMiddleware } from "redux";
import { connect, Provider } from "react-redux";
import { logger } from "redux-logger";
import { NavigationScreenProps, StackNavigatorConfig, StackNavigator, addNavigationHelpers } from "react-navigation";
import { View, Text, AppRegistry } from "react-native";
import { Button } from "react-native-elements";

/**
 * Describing the state I want to track in my application.
 * Pretty simple at the moment, the current count and that nav object that
 * is injected into the navigator (I am not clear what its role is)
 * 
 * This definition gives me an idea of what I want my store to have.
 * Next, I will be creating the reducers to operate on each of these sections.
 */
interface IAppState {
    currentCount: number;
    nav: any;
}

/**
 * This reducer will allow me to mutate data if required. At the moment I will
 * fix it to the answer of life, universe and everything.
 */
const countReducer = (state: number = 42, action: AnyAction): number => {
    return state;
}

/// ######################## Little side track!
// As I want to create the navigationReducer, I will need to create the 
// RootNavigator and the screens that I am going to be referencing.

/**
 * As I don't want to be extending every single prop to be a NavigationScreenProps
 * I am going to create this interface that gets merged with the specific definition as a type
 * before it gets used.
 */
interface INavigationScreenProps extends NavigationScreenProps<{}> { }

/**
 * Let's create the first screen that we are going to call in a very
 * original way: ScreenOne.
 * This screen is going to have the same properties as the store on this exercise,
 * but in reality it should be a subsection of the store.
 */
interface IScreenOneProps {
    count: number;
    navState: any;
}

/**
 * Quickly merging this screen props with the navigation props so I can access
 * the navigator and request a different route.
 */
type ScreenOneProps = IScreenOneProps & INavigationScreenProps;

/**
 * Implementing the ScreenOne component. It displays a 'log in!' button and that
 * is all.
 */
class ScreenOne extends React.Component<ScreenOneProps> {
    constructor(props: ScreenOneProps) {
        super(props);
    }

    public render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, backgroundColor: "#acdcff", alignContent: "center", justifyContent: "center" }}>
                <Text style={{ textAlign: "center" }}>{`${this.props.count}`}</Text>
                <Button title="Log In!" icon={{ name: "cached" }} onPress={() => navigate(RouteNames.Two)} />
            </View>
        );
    }
}

/**
 * Transforms the application state into a component specific language.
 * @param state application state as provided by redux
 * @returns properties required by @see ScreenOne
 */
const mapStateToScreenOneProps = (state: IAppState): IScreenOneProps => {
    return {
        count: state.currentCount,
        navState: state.nav
    };
}

/**
 * Turning the component into a container (as defined by redux)
 */
const ScreenOneContainer = connect(mapStateToScreenOneProps)(ScreenOne);

/**
 * Just a filler view giving us feedback about the transition to a second screen.
 */
const ScreenTwo = () => (
    <View style={{ flex: 1, backgroundColor: "#bdedff" }}>
        <Text style={{ flex: 1, textAlign: "center", textAlignVertical: "center" }}>
            Congratulations!{"\n"}You are logged in!
            </Text>
    </View>
)

/**
 * With the screens defined, we now know there are two possible routes we can do.
 */
enum RouteNames {
    One = "/one",
    Two = "/two"
}

// Getting closer to the definition of the navigation reducer.
/**
 * Defines the component handling the navigation at the root level (transitioning between users
 * that have logged in the application)
 */
const RootNavigator = StackNavigator(
    { // defines all possible routes for the current stack navigator
        [RouteNames.One]: { screen: ScreenOneContainer },
        [RouteNames.Two]: { screen: ScreenTwo }
    },
    { // and defines which of those routes is the initial one (and the state of the navigator)
        initialRouteName: RouteNames.One
    });
/**
 * Allows to change the store and its nav property.
 * @param state no idea what this state really is.
 * @param action
 */
const navReducer = (state: any, action: AnyAction) => {
    const newState = RootNavigator.router.getStateForAction(action, state);
    return newState || state;
}

/**
 * Creates the application store and where the state is tracked.
 */
const store = createStore(
    combineReducers({ currentCount: countReducer, nav: navReducer }),
    applyMiddleware(logger));

// With the store configured, we can now create a host for the root navigator.
// So future me, you might be wondering, why do we need to create a container
// to host the navigator?
// well... I am not quite sure at the moment... need to read more about it.

/**
 * Properties of the root navigator
 */
interface IAppNavHostProps {
    navState: any;
    dispatch: any;
}
/**
 * Host of the root navigator
 */
class RootNavigatorHost extends React.PureComponent<IAppNavHostProps> {
    constructor(props: IAppNavHostProps) {
        super(props);
    }

    public render() {
        return <RootNavigator
            navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.navState
            })} />;
    }
}
/**
 * Transforms the application state into properties of the root
 * navigator host.
 * @param state application state.
 */
const mapStateToAppNavProps = (state: IAppState) => ({
    navState: state.nav,
});
/**
 * Turning the root navigator host component into a container.
 */
const RootNavigatorContainer = connect(mapStateToAppNavProps)(RootNavigatorHost);
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
