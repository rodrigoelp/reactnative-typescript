import * as React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { bindActionCreators } from "redux";
import { connect, Dispatch } from "react-redux";
import { INavigationScreenProps } from "./navigationHelpers";
import { RouteNames } from "../routes";
import { IAppState, ActionType } from "../models";
import { logInUserActionCreator, adjustCounterActionCreator, adjustmentFunction } from "../reducers";

/**
 * Let's create the first screen that we are going to call in a very
 * original way: ScreenOne.
 * This screen is going to expose the count and the navigation between
 * the authentication and authenticated areas
 */
interface IScreenOneProps {
    /**
     * Just any property exposed by the component to demonstrate the plain
     * usage of redux.
     */
    count: number;
    navState: any;
}

/**
 * These are the actions/commands/operations the container exposes
 * mapped to action creators.
 */
interface IScreenOneActions {
    /**
     * Allows you to log in. Once done it will transition to the 
     * authenticated area.
     */
    logIn: () => any;
    /**
     * Adjusts the count stored in the store.
     */
    adjust: (adjuster: adjustmentFunction) => any;
}

/**
 * Quickly merging this screen props with the navigation props so I can access
 * the navigator and request a different route.
 */
type ScreenOneProps = IScreenOneProps & IScreenOneActions & INavigationScreenProps;

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
                <Text style={{ textAlign: "center" }}>{`This is the application state: ${this.props.count}`}</Text>
                <Button title="Log In!" icon={{ name: "cached" }} onPress={this.logIn} />
                <Text style={{ marginTop: 20 }}>
                    Change the state!
                </Text>
                <Button style={{ marginVertical: 20 }} title="Random increase!" onPress={this.increase} />
                <Button title="Decrease" onPress={this.decrease} />
            </View>
        );
    }

    private logIn = () => {
        this.props.logIn(); // this will trigger the navigation. Check the rootNavigationReducer.
    }

    // from this point onwards (in this class) the methods will modify the count in the store.
    private increase = () => {
        this.props.adjust((x: number) => x + Math.floor(Math.random() * 10));
    }

    private decrease = () => {
        this.props.adjust((x: number) => x - 1);
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
        navState: state.rootNavigator
    };
}

/**
 * Maps action creators to properties in the container.
 * @param dispatch action dispatcher
 */
const mapDispatchToProps = (dispatch: Dispatch<any>): IScreenOneActions => {
    return bindActionCreators({
        logIn: logInUserActionCreator,
        adjust: adjustCounterActionCreator
    }, dispatch);
}

/**
 * Turning the component into a container (as defined by redux)
 */
const ScreenOneContainer = connect(mapStateToScreenOneProps, mapDispatchToProps)(ScreenOne);

export { ScreenOneContainer };