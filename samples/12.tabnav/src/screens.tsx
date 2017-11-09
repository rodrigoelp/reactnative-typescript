import * as React from "react";
import { View, Text, Image } from "react-native";
import { TabNavigator, TabNavigatorConfig, NavigationRouteConfigMap, NavigationTabScreenOptions } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles, iconMaxSize } from "./styles";
import { IconList } from "./IconList";

class FirstScreen extends React.Component {
    static navigationOptions: NavigationTabScreenOptions = {
        // when the definition of the screen is loaded
        // this static field is read and loaded into the tabbar.
        tabBarLabel: "The First!",
        tabBarIcon: (options) => (<Icon name="rocket" size={iconMaxSize} color={options.tintColor!} />),
    };

    public render() {
        const title = "First\nScreen"
        return (
            <View style={[styles.container, styles.firstScreen]}>
                <Text style={styles.labelOnDarkBackground}>{title}</Text>
            </View>
        );
    }
}

class SecondScreen extends React.Component {
    static navigationOptions: NavigationTabScreenOptions = {
        tabBarLabel: "More...",
        tabBarIcon: (options) => (<Icon name="bell" size={iconMaxSize} color={options.tintColor!} />),
    };

    public render() {
        const title = "Second\nScreen";
        return (
            <View style={[styles.fullViewContainer, styles.secondScreen, { paddingTop: 40 }]}>
                <IconList />
            </View>
        );
    }
}

class ThirdScreen extends React.Component {
    static navigationOptions: NavigationTabScreenOptions = {
        tabBarLabel: "More more..?",
        tabBarIcon: (options) => (<Icon name="calendar" size={iconMaxSize} color={options.tintColor!} />),
    };

    public render() {
        const title = "Third\nScreen";
        return (
            <View style={[styles.container, styles.thirdScreen]}>
                <Text style={styles.labelOnDarkBackground}>{title}</Text>
            </View>
        );
    }
}

class FourthScreen extends React.Component {
    static navigationOptions: NavigationTabScreenOptions = {
        tabBarLabel: "Settings?",
        tabBarIcon: (options) => (<Icon name="shield" size={iconMaxSize} color={options.tintColor!} />),
    };

    public render() {
        const title = "Fourth\nScreen";
        return (
            <View style={[styles.container, styles.fourthScreen]}>
                <Text style={styles.labelOnDarkBackground}>{title}</Text>
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