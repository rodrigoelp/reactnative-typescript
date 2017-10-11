"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const appStyles = react_native_1.StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    },
    excitedText: {
        fontSize: 24,
        fontWeight: "bold",
        margin: 10,
        textDecorationStyle: "dashed",
    },
    normalText: {
        margin: 4,
    },
});
class App extends React.Component {
    render() {
        return (React.createElement(react_native_1.View, { style: appStyles.container },
            React.createElement(react_native_1.Text, { style: appStyles.excitedText }, "Hello World!"),
            React.createElement(react_native_1.Text, { style: appStyles.normalText }, "As expected, this is the most amazing message ever!")));
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map