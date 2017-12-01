import * as React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { connect, Dispatch } from "react-redux";
import { INavigationScreenProps } from "./navigationHelpers";
import { RouteNames } from "../routes";
import { IAppState, ActionType } from "../models";
import { bindActionCreators } from "redux";
import { logInUserActionCreator, adjustCounterActionCreator, adjustmentFunction } from "../reducers";

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

interface IScreenOneActions {
    logIn: () => any;
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
        this.props.logIn();
    }

    private increase = () => {
        this.props.adjust((x: number) => x + Math.floor(Math.random() * 10))
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