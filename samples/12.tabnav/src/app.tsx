import * as React from "react";
import { AppRegistry, View, Text } from "react-native";

const App = () => (
    <View style={{ flex: 1, alignContent: "center", justifyContent: "center" }}>
        <Text>Hello world</Text>
    </View>
);

AppRegistry.registerComponent("tabatha", () => App);
