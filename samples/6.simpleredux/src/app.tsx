
import * as React from "react";
import { AppRegistry, View, Text } from "react-native";

export class App extends React.Component<object, object> {
    constructor() {
        super();
    }

    public render() {
        return (
            <View style={{ flex: 1, backgroundColor: "gray", alignItems: "center", justifyContent: "center" }}>
                <Text style={{backgroundColor: "green" }}>Starting the application...</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('simpleredux', () => App);