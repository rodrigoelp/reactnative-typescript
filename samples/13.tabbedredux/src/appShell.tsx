import * as React from "react";
import { View, Button } from "react-native";
import { Provider } from "react-redux";
import { StackNavigator, NavigationRouteConfigMap, StackNavigatorConfig } from "react-navigation";
import { HostRouteNames } from "./models";
import { AppTabNavigator } from "./appScreens";
import store from "./store";

const Login = (props: any) => (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title="Login!" onPress={() => props.navigation.navigate(HostRouteNames.SecureHost)} />
    </View>
);

const Secure = () => (
    <View style={{ flex: 1 }}>
        <AppTabNavigator />
    </View>
);

const routeConfig: NavigationRouteConfigMap = {
    [HostRouteNames.Login]: { screen: Login },
    [HostRouteNames.SecureHost]: { screen: Secure },
};

const stackConfig: StackNavigatorConfig = {
    initialRouteName: HostRouteNames.Login
};

const AppNavigator = StackNavigator(routeConfig, stackConfig);

/**
 * This is the shell of the application, basically hosts the provider that will be manipulating the navigator
 * via a smart component (or container)
 */
class AppShell extends React.PureComponent {
    public render() { // this will provide the entry point for redux to start doing its thing.
        return (
            <Provider store={store}> 
                <AppNavigator />
            </Provider>
        )
    }
}

export { AppShell, AppNavigator };