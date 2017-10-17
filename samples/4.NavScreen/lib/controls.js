"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const styles_1 = require("./styles");
class Button extends React.Component {
    render() {
        const buttonStyle = this.props.style !== undefined ? this.props.style : styles_1.appStyles.defaultContainer;
        return (React.createElement(react_native_1.View, { style: buttonStyle },
            React.createElement(react_native_1.TouchableHighlight, { style: styles_1.appStyles.buttonTouchableContent, onPress: this.props.onPress },
                React.createElement(react_native_1.Text, { style: styles_1.appStyles.largeButtonText }, this.props.text))));
    }
}
exports.Button = Button;
//# sourceMappingURL=controls.js.map