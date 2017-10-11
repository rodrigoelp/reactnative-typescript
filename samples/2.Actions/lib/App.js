"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const Button_1 = require("./Button");
const Resources = require("./Resources");
class App extends React.Component {
    render() {
        return (React.createElement(react_native_1.View, { style: Resources.appStyles.container },
            React.createElement(react_native_1.Text, { style: Resources.appStyles.excitedText }, "Are you ready to rumble?"),
            React.createElement(Button_1.default, { text: "Hell yeah!", onPress: this.readyToRumble }),
            React.createElement(Button_1.default, { text: "I am not sure... Am I?", onPress: this.chooseYourDestiny }),
            React.createElement(Button_1.default, { text: "Yeah, no.", onPress: this.IWantMyMommy })));
    }
    readyToRumble() {
        react_native_1.Alert.alert("That is the attitude!", "So, let's rumble!", [
            { text: "Begin rumble", onPress: () => console.log("Rumbling like there is no tomorrow.") },
        ], { cancelable: false });
    }
    chooseYourDestiny() {
        react_native_1.Alert.alert("Choose your destiny!", "The risk of a wrong decision is preferable to the terror of indecision. \n - Maimonides -", [
            { text: "Nah, I'm good.", onPress: this.IWantMyMommy },
            { text: "Let's do this!", onPress: this.readyToRumble },
        ]);
    }
    IWantMyMommy() {
        react_native_1.Alert.alert("You chose poorly!", "Are you crying?", [
            { text: "No, I'm not crying...", onPress: () => console.log("Try another day...") },
            { text: "No, is just raining... on my face.", onPress: () => console.log("Try another day...") },
            { text: "No, I'm making a lasagna... for one.", onPress: () => console.log("Try another day...") },
        ]);
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map