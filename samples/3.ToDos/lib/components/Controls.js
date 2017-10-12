"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const Resources = require("../Resources");
class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(react_native_1.TouchableHighlight, { style: Resources.appStyles.button, onPress: this.props.onPress },
            React.createElement(react_native_1.Text, { style: Resources.appStyles.buttonText }, this.props.text)));
    }
}
exports.Button = Button;
//# sourceMappingURL=Controls.js.map