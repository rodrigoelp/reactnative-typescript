
import * as React from "react";
import { Navigator, Text, TouchableHighlight, View } from "react-native";
import { AppColors, appStyles } from "./styles";

export enum RouteNames {
    One = "One",
    Two = "Two",
    Three = "Three"
}

interface INavigatorEnabledScreen {
    navigator: Navigator;
}

export interface IScreenOneParams extends INavigatorEnabledScreen {
}

export class ScreenOne extends React.Component<IScreenOneParams, object> {
    constructor(props: IScreenOneParams) {
        super(props);
    }
    
    public render() {
        return (
            <View style={appStyles.screenOneContainer}>
                <Text style={appStyles.hugeButtonText}>Hello World</Text>
                <TouchableHighlight style={appStyles.hugeButton}>
                    <Text style={appStyles.hugeButtonText}>Tap in here to continue...</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export class ScreenTwo extends React.Component<INavigatorEnabledScreen, object> {
    public render() {
        return (
            <View style={appStyles.screenTwoContainer}>
                <TouchableHighlight style={appStyles.hugeButton}>
                    <Text style={appStyles.hugeButtonText}>
                        And going back!
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight style={appStyles.hugeButton}>
                    <Text style={appStyles.hugeButtonText}>
                        Or going forward!
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export class ScreenThree extends React.Component<INavigatorEnabledScreen, object> {
    public render() {
        return (
            <View style={appStyles.screenThreeContainer}>
                <TouchableHighlight style={appStyles.hugeButton}>
                    <Text style={appStyles.hugeButtonText}>
                        One step back
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight style={appStyles.hugeButton}>
                    <Text style={appStyles.hugeButtonText}>
                        Going to one.
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}


export class EndOfLineScreen extends React.Component<object, object> {
    public render() {
        return (
            <View style={appStyles.defaultContainer}>
                <Text style={appStyles.largeText}>
                    You came to the place of no return. You are no more... you are dead... you are an ex-user.
                </Text>
            </View>
        );
    }
}
