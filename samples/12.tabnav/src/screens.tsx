import * as React from "react";
import { View, Text, Image } from "react-native";
import { TabNavigator, TabNavigatorConfig, NavigationRouteConfigMap, NavigationTabScreenOptions } from "react-navigation";
import { styles } from "./styles";

class FirstScreen extends React.Component {
    static navigationOptions: NavigationTabScreenOptions = {
        // when the definition of the screen is loaded
        // this static field is read and loaded into the tabbar.
        tabBarLabel: "The First!",
        tabBarIcon: ({ tintColor }) => (
            <Image source={{}} />
        ),
    };

    public render() {
        return (
            <View style={[styles.container, styles.firstScreen]}>
                <Text style={styles.labelOnDarkBackground}>First screen</Text>
            </View>
        );
    }
}

class SecondScreen extends React.Component {
    static navigationOptions: NavigationTabScreenOptions = {
        tabBarLabel: "More...",
        tabBarIcon: ({ tintColor }) => (
            <Image source={{}} />
        ),
    };
    
    public render() {
        return (
            <View style={[styles.container, styles.secondScreen]}>
                <Text style={styles.labelOnLightBackground}>Second screen</Text>
            </View>
        );
    }
}

class ThirdScreen extends React.Component {
    static navigationOptions: NavigationTabScreenOptions = {
        tabBarLabel: "More more..?",
        tabBarIcon: ({ tintColor }) => (
            <Image source={{}} />
        ),
    };

    public render() {
        return (
            <View style={[styles.container, styles.thirdScreen]}>
                <Text style={styles.labelOnDarkBackground}>Third screen</Text>
            </View>
        );
    }
}

class FourthScreen extends React.Component {
    static navigationOptions: NavigationTabScreenOptions = {
        tabBarLabel: "Settings?",
        tabBarIcon: ({ tintColor }) => (
            <Image source={{}} />
        ),
    };

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
    // If you do not provide the static field called `navigationOptions` on each screen
    // the key of the dictionary below is used as the label
    // for the tab button
    // (for example: `[Screens.Home]` which is translated to`Home` - its literal string)
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