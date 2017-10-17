
import * as React from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { NavigationScreenProps, NavigationActions } from "react-navigation";
import { AppColors, appStyles } from "./styles";
import { Button } from "./controls";

/**
 * I love enum because it provides a type safe way of dealing with certain constants.
 * In this case, I am using it as my collection of possible routes.
 */
export enum RouteNames {
    One = "One",
    Two = "Two",
    Three = "Three"
}

/**
 * Base parameters for any screen with navigation support.
 * @description: This is a part of the legacy code from the previous screen.
 * Not really useful and can be replaced with object for @see ScreenTwo and @see ScreenThree.
 */
interface INavigatorEnabledScreen { }

/**
 * Generic parameters for a screen with navigation support.
 * It extends @see NavigationScreenProps<T>
 */
interface IGenericProps extends NavigationScreenProps<INavigatorEnabledScreen> { }

/**
 * Parameters passed to @see ScreenOne which takes the name to display on the screen.
 */
export interface IScreenOneParams extends INavigatorEnabledScreen {
    nameToDisplay: string;
}
/**
 * Wrapper of @see ScreenOne that provides navigation for this component.
 */
interface IScreenOneProps extends NavigationScreenProps<IScreenOneParams> { }

/**
 * Component to display a name.
 */
export class ScreenOne extends React.Component<IScreenOneProps, object> {
    public render() {
        const name = this.props.navigation.state.params.nameToDisplay;
        const message = `Hello my good friend ${name}!\nHaven't seen you in a while!\n\nWelcome!`;
        return (
            <View style={appStyles.screenOneContainer}>
                <View style={appStyles.infoPanel}>
                    <Text style={appStyles.largeText}>{message}</Text>
                </View>
                <View style={appStyles.bottomButtonPanel}>
                    <Button text="Customise name >" onPress={this.chooseANameFromGameOfThrones} style={appStyles.bigGoldenButton} />
                </View>
            </View>
        );
    }

    private chooseANameFromGameOfThrones = (): void => {
        this.props.navigation.navigate(RouteNames.Two);
    };
}

/**
 * Component to choose between some names or more characters.
 */
export class ScreenTwo extends React.Component<IGenericProps> {
    public render() {
        return (
            <View style={appStyles.screenTwoContainer}>
                <View style={appStyles.infoPanel}>
                    <Text style={appStyles.largeText}>
                        Pick one (wisely) from the names below, or pick an options at the bottom:
                    </Text>
                </View>
                <View style={appStyles.optionsPanel}>
                    <Button text="Jon" onPress={() => this.chooseName("Jon")} style={appStyles.bigGoldenButton} />
                    <Button text="Daeny" onPress={() => this.chooseName("Daeny")} style={appStyles.bigGoldenButton} />
                    <Button text="Sam" onPress={() => this.chooseName("Sam")} style={appStyles.bigGoldenButton} />
                </View>
                <View style={appStyles.bottomButtonPanel}>
                    <Button text="Nah" onPress={this.goBack} style={appStyles.bigGoldenButton} />
                    <Button text="More" onPress={this.showOtherNameOptions} style={appStyles.bigGoldenButton} />
                </View>
            </View>
        );
    }

    private chooseName = (name: string): void => {
        this.props.navigation.dispatch(
            NavigationActions.reset({ // removes all the stack as it navigates back to ScreenOne
                index: 0,
                key: "foo", // this key does not matter at the moment.
                actions: [
                    NavigationActions.navigate({ routeName: RouteNames.One, params: { nameToDisplay: name } })
                ]
            })
        );
    };

    private goBack = (): void => {
        this.props.navigation.goBack();
    };

    private showOtherNameOptions = (): void => {
        this.props.navigation.navigate(RouteNames.Three);
    };
}

/**
 * Component to pick some more people...
 */
export class ScreenThree extends React.Component<IGenericProps> {
    public render() {
        return (
            <View style={appStyles.screenThreeContainer}>
                <View style={appStyles.smallInfoPanel}>
                    <Text style={appStyles.largeText}>
                        Now you have to pick one of these names:
                    </Text>
                </View>
                <View style={appStyles.optionsPanel}>
                    <Button text="Googleplex Starthinker" onPress={() => this.choseFinalName("Googleplex Starthinker")} style={appStyles.bigGoldenButton} />
                    <Button text="Sperm Whale" onPress={() => this.choseFinalName("Sperm Whale")} style={appStyles.bigGoldenButton} />
                    <Button text="Wonko" onPress={() => this.choseFinalName("Wonko")} style={appStyles.bigGoldenButton} />
                    <Button text="Zaphod Beeblebrox" onPress={() => this.choseFinalName("Zaphod Beeblebrox")} style={appStyles.bigGoldenButton} />
                    <Button text="Know-Nothing Bozo" onPress={() => this.choseFinalName("Know-Nothing Bozo")} style={appStyles.bigGoldenButton} />
                    <Button text="These are worse!" onPress={this.goBack} style={appStyles.bigGoldenButton} />
                </View>
            </View>
        );
    }

    private goBack = (): void => {
        this.props.navigation.goBack();
    }

    private choseFinalName = (name: string): void => {
        this.props.navigation.dispatch(
            NavigationActions.reset({
                index: 0,
                key: "foo",
                actions: [
                    NavigationActions.navigate({ routeName: RouteNames.One, params: { nameToDisplay: name } })
                ]
            })
        );
    }
}

/**
 * This component is only used if some weird navigation happens and we did not foresee that it was going to happen.
 */
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
