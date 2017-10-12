"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const AppNavigator_1 = require("./AppNavigator");
class AppShell extends React.Component {
    render() {
        // return (
        //     Platform.select({
        //         android: (
        //             <View style={appStyles.shell}>
        //                 <Text>
        //                     Hello world again..
        //                 </Text>
        //             </View>
        //         ),
        //         ios: (
        //             <View style={appStyles.shell}>
        //                 <Text>
        //                     this was an expensive hello...
        //                 </Text>
        //             </View>
        //         ),
        //     })
        // );
        return React.createElement(AppNavigator_1.Router, null);
    }
}
exports.default = AppShell;
//# sourceMappingURL=AppShell.js.map