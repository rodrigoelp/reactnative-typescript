
import * as React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Button from "./Button";
import * as Resources from "./Resources";

export default class App extends React.Component<object, object> {

    public render() {
        return ( // this stupid ( is here to allow me to start breaking my return from the next line.
            <View style={Resources.appStyles.container}>
                <Text style={Resources.appStyles.excitedText}>Are you ready to rumble?</Text>

                <Button text="Hell yeah!" onPress={this.readyToRumble} />
                <Button text="I am not sure... Am I?" onPress={this.chooseYourDestiny} />
                <Button text="Yeah, no." onPress={this.IWantMyMommy} />
            </View>
        );
    }

    private readyToRumble(): void {
        Alert.alert(
            "That is the attitude!",
            "So, let's rumble!",
            [
                { text: "Begin rumble", onPress: () => console.log("Rumbling like there is no tomorrow.") },
            ],
            { cancelable: false },
        );
    }

    private chooseYourDestiny(): void {
        Alert.alert(
            "Choose your destiny!",
            "The risk of a wrong decision is preferable to the terror of indecision. \n - Maimonides -",
            [
                { text: "Nah, I'm good.", onPress: this.IWantMyMommy },
                { text: "Let's do this!", onPress: this.readyToRumble },
            ],
        );
    }

    private IWantMyMommy(): void {
        Alert.alert(
            "You chose poorly!",
            "Are you crying?",
            [
                { text: "No, I'm not crying...", onPress: () => console.log("Try another day...") },
                { text: "No, is just raining... on my face.", onPress: () => console.log("Try another day...") },
                { text: "No, I'm making a lasagna... for one.", onPress: () => console.log("Try another day...") },
            ],
        );
    }
}
