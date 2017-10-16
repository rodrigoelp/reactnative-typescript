
import * as React from "react";
import { AppRegistry, View, Route, Navigator } from "react-native";
import { EndOfLineScreen, RouteNames, ScreenOne, ScreenTwo, ScreenThree } from "./screens";
import { appStyles } from "./styles";

class App extends React.Component<object> {

    initialRoute: Route = {
        id: RouteNames.One,
    };
    
    public render() {
        return (
            <Navigator initialRoute={this.initialRoute} renderScene={this.navigatorRenderScene} />
        );
    }

    private navigatorRenderScene(route: Route, navigator: Navigator) {
        switch (route.id) {
            case RouteNames.One: return <ScreenOne navigator={navigator} />;
            case RouteNames.Two: return <ScreenTwo navigator={navigator} />;
            case RouteNames.Three: return <ScreenThree navigator={navigator} />;
            default: return <EndOfLineScreen />;
        }
    }
}

AppRegistry.registerComponent("NavScreen", () => App);
