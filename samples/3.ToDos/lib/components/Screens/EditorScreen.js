"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const Resources_1 = require("../../Resources");
const AppNavigator_1 = require("../AppNavigator");
const Controls_1 = require("../Controls");
const Interfaces_1 = require("../Interfaces");
const Store_1 = require("../Models/Store");
class EditorScreen extends React.Component {
    constructor(props) {
        super(props);
        this.update = (text) => {
            const oldItem = this.state.item;
            this.setState({
                item: {
                    id: oldItem.id,
                    title: text,
                },
            });
        };
        this.done = () => {
            const currentItem = this.state.item;
            const store = this.props.navigation.state.params.store;
            store.replace(currentItem);
            this.props.navigation.navigate(AppNavigator_1.AppRouteNames.ListOfTodos, { store });
        };
        this.cancel = () => {
            this.props.navigation.goBack();
        };
        const todoItem = this.props.navigation.state.params.item;
        this.state = { item: todoItem === undefined ? Store_1.Store.createNewItem() : todoItem };
    }
    render() {
        const mode = this.props.navigation.state.params.mode;
        const actionToDo = mode === Interfaces_1.EditorMode.New ? "add a new task." : "edit this task.";
        return (React.createElement(react_native_1.View, { style: Resources_1.appStyles.screenContainer },
            React.createElement(react_native_1.Text, { style: Resources_1.appStyles.header1 },
                "Let's ",
                actionToDo),
            React.createElement(react_native_1.TextInput, { style: Resources_1.appStyles.textInput, onChangeText: this.update, value: this.state.item.title }),
            React.createElement(react_native_1.View, { style: Resources_1.appStyles.optionsPanel },
                React.createElement(Controls_1.Button, { text: "Done", onPress: this.done }),
                React.createElement(Controls_1.Button, { text: "Cancel", onPress: this.cancel }))));
    }
}
exports.default = EditorScreen;
//# sourceMappingURL=EditorScreen.js.map