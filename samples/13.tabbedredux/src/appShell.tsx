import * as React from "react";
import { View, Button } from "react-native";
import { StackNavigator, NavigationRouteConfigMap, StackNavigatorConfig } from "react-navigation";
import { HostRouteNames } from "./models";
import { AppTabNavigator } from "./appScreens";

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

export { AppNavigator };