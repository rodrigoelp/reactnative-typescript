"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const screens_1 = require("./screens");
class App extends React.Component {
    constructor() {
        super(...arguments);
        this.initialRoute = {
            id: screens_1.RouteNames.One,
        };
    }
    render() {
        return (React.createElement(react_native_1.Navigator, { initialRoute: this.initialRoute, renderScene: this.navigatorRenderScene }));
    }
    navigatorRenderScene(route, navigator) {
        switch (route.id) {
            case screens_1.RouteNames.One: return React.createElement(screens_1.ScreenOne, { navigator: navigator });
            case screens_1.RouteNames.Two: return React.createElement(screens_1.ScreenTwo, { navigator: navigator });
            case screens_1.RouteNames.Three: return React.createElement(screens_1.ScreenThree, { navigator: navigator });
            default: return React.createElement(screens_1.EndOfLineScreen, null);
        }
    }
}
react_native_1.AppRegistry.registerComponent("NavScreen", () => App);
//# sourceMappingURL=app.js.map