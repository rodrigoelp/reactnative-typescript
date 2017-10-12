"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const Resources_1 = require("../../Resources");
const AppNavigator_1 = require("../AppNavigator");
const Controls_1 = require("../Controls");
const Interfaces_1 = require("../Interfaces");
class ListScreen extends React.Component {
    constructor(props) {
        super(props);
        // things to avoid.
        // declaring the lambda below as a function causes descoping of 'this'
        // meaning, 'this' is going to be different to the current instance.
        this.addNewItem = () => {
            const store = this.props.navigation.state.params.store;
            this.props.navigation.navigate(AppNavigator_1.AppRouteNames.ItemEditor, { mode: Interfaces_1.EditorMode.New, store });
        };
        this.templateForItem = (item) => {
            return (React.createElement(react_native_1.View, { style: { flex: 1, flexDirection: "row", justifyContent: "flex-start" } },
                React.createElement(react_native_1.Text, { style: Resources_1.appStyles.normalText }, item.title),
                React.createElement(Controls_1.Button, { text: "Delete", onPress: () => this.deleteItem(item) })));
        };
        this.deleteItem = (item) => {
            const store = this.props.navigation.state.params.store;
            store.drop(item);
            this.setState({}); // forcing the update.
        };
    }
    render() {
        const store = this.props.navigation.state.params.store;
        const allItems = store.getAll();
        return (React.createElement(react_native_1.View, { style: Resources_1.appStyles.screenContainer },
            React.createElement(react_native_1.Text, { style: Resources_1.appStyles.header1 },
                "Today's list of tasks to complete: ",
                allItems.length),
            React.createElement(react_native_1.FlatList, { style: Resources_1.appStyles.list, data: allItems, renderItem: ({ item }) => this.templateForItem(item), keyExtractor: (item, index) => item.id.ToString() }),
            React.createElement(react_native_1.View, { style: Resources_1.appStyles.optionsPanel },
                React.createElement(Controls_1.Button, { text: "Add", onPress: this.addNewItem }))));
    }
}
exports.default = ListScreen;
//# sourceMappingURL=ListScreen.js.map