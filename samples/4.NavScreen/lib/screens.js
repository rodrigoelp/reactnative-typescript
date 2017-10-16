"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const styles_1 = require("./styles");
var RouteNames;
(function (RouteNames) {
    RouteNames["One"] = "One";
    RouteNames["Two"] = "Two";
    RouteNames["Three"] = "Three";
})(RouteNames = exports.RouteNames || (exports.RouteNames = {}));
class ScreenOne extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(react_native_1.View, { style: styles_1.appStyles.screenOneContainer },
            React.createElement(react_native_1.Text, { style: styles_1.appStyles.hugeButtonText }, "Hello World"),
            React.createElement(react_native_1.TouchableHighlight, { style: styles_1.appStyles.hugeButton },
                React.createElement(react_native_1.Text, { style: styles_1.appStyles.hugeButtonText }, "Tap in here to continue..."))));
    }
}
exports.ScreenOne = ScreenOne;
class ScreenTwo extends React.Component {
    render() {
        return (React.createElement(react_native_1.View, { style: styles_1.appStyles.screenTwoContainer },
            React.createElement(react_native_1.TouchableHighlight, { style: styles_1.appStyles.hugeButton },
                React.createElement(react_native_1.Text, { style: styles_1.appStyles.hugeButtonText }, "And going back!")),
            React.createElement(react_native_1.TouchableHighlight, { style: styles_1.appStyles.hugeButton },
                React.createElement(react_native_1.Text, { style: styles_1.appStyles.hugeButtonText }, "Or going forward!"))));
    }
}
exports.ScreenTwo = ScreenTwo;
class ScreenThree extends React.Component {
    render() {
        return (React.createElement(react_native_1.View, { style: styles_1.appStyles.screenThreeContainer },
            React.createElement(react_native_1.TouchableHighlight, { style: styles_1.appStyles.hugeButton },
                React.createElement(react_native_1.Text, { style: styles_1.appStyles.hugeButtonText }, "One step back")),
            React.createElement(react_native_1.TouchableHighlight, { style: styles_1.appStyles.hugeButton },
                React.createElement(react_native_1.Text, { style: styles_1.appStyles.hugeButtonText }, "Going to one."))));
    }
}
exports.ScreenThree = ScreenThree;
class EndOfLineScreen extends React.Component {
    render() {
        return (React.createElement(react_native_1.View, { style: styles_1.appStyles.defaultContainer },
            React.createElement(react_native_1.Text, { style: styles_1.appStyles.largeText }, "You came to the place of no return. You are no more... you are dead... you are an ex-user.")));
    }
}
exports.EndOfLineScreen = EndOfLineScreen;
//# sourceMappingURL=screens.js.map