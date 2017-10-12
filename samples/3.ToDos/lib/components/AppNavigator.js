"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_navigation_1 = require("react-navigation");
const Store_1 = require("./Models/Store");
const EditorScreen_1 = require("./Screens/EditorScreen");
const ListScreen_1 = require("./Screens/ListScreen");
var AppRouteNames;
(function (AppRouteNames) {
    AppRouteNames["ListOfTodos"] = "ListOfTodos";
    AppRouteNames["ItemEditor"] = "TodoItemEditor";
})(AppRouteNames = exports.AppRouteNames || (exports.AppRouteNames = {}));
const routeConfigMap = {
    [AppRouteNames.ListOfTodos]: {
        path: "start",
        screen: ListScreen_1.default,
    },
    [AppRouteNames.ItemEditor]: {
        path: "next",
        screen: EditorScreen_1.default,
    },
};
const initialParams = {
    store: new Store_1.Store(),
};
const navConfig = {
    initialRouteName: AppRouteNames.ListOfTodos,
    initialRouteParams: initialParams,
    navigationOptions: {},
};
exports.AppNavigator = react_navigation_1.StackNavigator(routeConfigMap, navConfig);
exports.Router = (props) => (React.createElement(exports.AppNavigator, { navigation: react_navigation_1.addNavigationHelpers({
        dispatch: (action) => true,
        state: {},
    }) }));
//# sourceMappingURL=AppNavigator.js.map