"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const react_navigation_1 = require("react-navigation");
const styles_1 = require("./styles");
const controls_1 = require("./controls");
/**
 * I love enum because it provides a type safe way of dealing with certain constants.
 * In this case, I am using it as my collection of possible routes.
 */
var RouteNames;
(function (RouteNames) {
    RouteNames["One"] = "One";
    RouteNames["Two"] = "Two";
    RouteNames["Three"] = "Three";
})(RouteNames = exports.RouteNames || (exports.RouteNames = {}));
/**
 * Component to display a name.
 */
class ScreenOne extends React.Component {
    constructor() {
        super(...arguments);
        this.chooseANameFromGameOfThrones = () => {
            this.props.navigation.navigate(RouteNames.Two);
        };
    }
    render() {
        const name = this.props.navigation.state.params.nameToDisplay;
        const message = `Hello my good friend ${name}!\nHaven't seen you in a while!\n\nWelcome!`;
        return (React.createElement(react_native_1.View, { style: styles_1.appStyles.screenOneContainer },
            React.createElement(react_native_1.View, { style: styles_1.appStyles.infoPanel },
                React.createElement(react_native_1.Text, { style: styles_1.appStyles.largeText }, message)),
            React.createElement(react_native_1.View, { style: styles_1.appStyles.bottomButtonPanel },
                React.createElement(controls_1.Button, { text: "Customise name >", onPress: this.chooseANameFromGameOfThrones, style: styles_1.appStyles.bigGoldenButton }))));
    }
}
exports.ScreenOne = ScreenOne;
/**
 * Component to choose between some names or more characters.
 */
class ScreenTwo extends React.Component {
    constructor() {
        super(...arguments);
        this.chooseName = (name) => {
            this.props.navigation.dispatch(react_navigation_1.NavigationActions.reset({
                index: 0,
                key: "foo",
                actions: [
                    react_navigation_1.NavigationActions.navigate({ routeName: RouteNames.One, params: { nameToDisplay: name } })
                ]
            }));
        };
        this.goBack = () => {
            this.props.navigation.goBack();
        };
        this.showOtherNameOptions = () => {
            this.props.navigation.navigate(RouteNames.Three);
        };
    }
    render() {
        return (React.createElement(react_native_1.View, { style: styles_1.appStyles.screenTwoContainer },
            React.createElement(react_native_1.View, { style: styles_1.appStyles.infoPanel },
                React.createElement(react_native_1.Text, { style: styles_1.appStyles.largeText }, "Pick one (wisely) from the names below, or pick an options at the bottom:")),
            React.createElement(react_native_1.View, { style: styles_1.appStyles.optionsPanel },
                React.createElement(controls_1.Button, { text: "Jon", onPress: () => this.chooseName("Jon"), style: styles_1.appStyles.bigGoldenButton }),
                React.createElement(controls_1.Button, { text: "Daeny", onPress: () => this.chooseName("Daeny"), style: styles_1.appStyles.bigGoldenButton }),
                React.createElement(controls_1.Button, { text: "Sam", onPress: () => this.chooseName("Sam"), style: styles_1.appStyles.bigGoldenButton })),
            React.createElement(react_native_1.View, { style: styles_1.appStyles.bottomButtonPanel },
                React.createElement(controls_1.Button, { text: "Nah", onPress: this.goBack, style: styles_1.appStyles.bigGoldenButton }),
                React.createElement(controls_1.Button, { text: "More", onPress: this.showOtherNameOptions, style: styles_1.appStyles.bigGoldenButton }))));
    }
}
exports.ScreenTwo = ScreenTwo;
/**
 * Component to pick some more people...
 */
class ScreenThree extends React.Component {
    constructor() {
        super(...arguments);
        this.goBack = () => {
            this.props.navigation.goBack();
        };
        this.choseFinalName = (name) => {
            this.props.navigation.dispatch(react_navigation_1.NavigationActions.reset({
                index: 0,
                key: "foo",
                actions: [
                    react_navigation_1.NavigationActions.navigate({ routeName: RouteNames.One, params: { nameToDisplay: name } })
                ]
            }));
        };
    }
    render() {
        return (React.createElement(react_native_1.View, { style: styles_1.appStyles.screenThreeContainer },
            React.createElement(react_native_1.View, { style: styles_1.appStyles.smallInfoPanel },
                React.createElement(react_native_1.Text, { style: styles_1.appStyles.largeText }, "Now you have to pick one of these names:")),
            React.createElement(react_native_1.View, { style: styles_1.appStyles.optionsPanel },
                React.createElement(controls_1.Button, { text: "Googleplex Starthinker", onPress: () => this.choseFinalName("Googleplex Starthinker"), style: styles_1.appStyles.bigGoldenButton }),
                React.createElement(controls_1.Button, { text: "Sperm Whale", onPress: () => this.choseFinalName("Sperm Whale"), style: styles_1.appStyles.bigGoldenButton }),
                React.createElement(controls_1.Button, { text: "Wonko", onPress: () => this.choseFinalName("Wonko"), style: styles_1.appStyles.bigGoldenButton }),
                React.createElement(controls_1.Button, { text: "Zaphod Beeblebrox", onPress: () => this.choseFinalName("Zaphod Beeblebrox"), style: styles_1.appStyles.bigGoldenButton }),
                React.createElement(controls_1.Button, { text: "Know-Nothing Bozo", onPress: () => this.choseFinalName("Know-Nothing Bozo"), style: styles_1.appStyles.bigGoldenButton }),
                React.createElement(controls_1.Button, { text: "These are worse!", onPress: this.goBack, style: styles_1.appStyles.bigGoldenButton }))));
    }
}
exports.ScreenThree = ScreenThree;
/**
 * This component is only used if some weird navigation happens and we did not foresee that it was going to happen.
 */
class EndOfLineScreen extends React.Component {
    render() {
        return (React.createElement(react_native_1.View, { style: styles_1.appStyles.defaultContainer },
            React.createElement(react_native_1.Text, { style: styles_1.appStyles.largeText }, "You came to the place of no return. You are no more... you are dead... you are an ex-user.")));
    }
}
exports.EndOfLineScreen = EndOfLineScreen;
//# sourceMappingURL=screens.js.map