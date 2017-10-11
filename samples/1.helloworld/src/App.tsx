
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

const appStyles = StyleSheet.create({
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

export default class App extends React.Component<object, object> {
    public render() {
        return ( // this stupid ( is here to allow me to start breaking my return from the next line.
            <View style={appStyles.container}>
                <Text style={appStyles.excitedText}>Hello World!</Text>
                <Text style={appStyles.normalText}>
                    As expected, this is the most amazing message ever!
                </Text>
            </View>
        );
    }
}
