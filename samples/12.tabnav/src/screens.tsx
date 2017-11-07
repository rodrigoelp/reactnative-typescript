import * as React from "react";
import { View, Text } from "react-native";
import { TabNavigator, TabNavigatorConfig, NavigationRouteConfigMap } from "react-navigation";
import { styles } from "./styles";

class FirstScreen extends React.Component {
    public render() {
        return (
            <View style={[styles.container, styles.firstScreen]}>
                <Text style={styles.labelOnDarkBackground}>First screen</Text>
            </View>
        );
    }
}

class SecondScreen extends React.Component {
    public render() {
        return (
            <View style={[styles.container, styles.secondScreen]}>
                <Text style={styles.labelOnLightBackground}>Second screen</Text>
            </View>
        );
    }
}

class ThirdScreen extends React.Component {
    public render() {
        return (
            <View style={[styles.container, styles.thirdScreen]}>
                <Text style={styles.labelOnDarkBackground}>Third screen</Text>
            </View>
        );
    }
}

class FourthScreen extends React.Component {
    public render() {
        return (
            <View style={[styles.container, styles.fourthScreen]}>
                <Text style={styles.labelOnDarkBackground}>Fourth screen</Text>
            </View>
        );
    }
}


enum Screens {
    Home = "Home",
    Second = "Second",
    Third = "Third",
    Fourth = "Fourth",
}

const routeConfig: NavigationRouteConfigMap = {
    // the first part of the dictionary is used as the name of the screen.
    [Screens.Home]: { path: "/", screen: FirstScreen },
    [Screens.Second]: { path: "/second", screen: SecondScreen },
    [Screens.Third]: { path: "/third", screen: ThirdScreen },
    [Screens.Fourth]: { path: "/fourth", screen: FourthScreen },
};

const tabConfig: TabNavigatorConfig = {
    animationEnabled: true,
    // tabBarComponent: TabBarTop,
    tabBarOptions: {
        showIcon: true,
        // activeBackgroundColor: "blue"
    }
};

const AppShell = TabNavigator(routeConfig, tabConfig);

export { AppShell };