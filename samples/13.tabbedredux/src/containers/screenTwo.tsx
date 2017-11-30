import * as React from "react";
import { View, Text } from "react-native";

/**
 * Just a filler view giving us feedback about the transition to a second screen.
 */
const ScreenTwo = () => (
    <View style={{ flex: 1, backgroundColor: "#bdedff" }}>
        <Text style={{ flex: 1, textAlign: "center", textAlignVertical: "center" }}>
            Congratulations!{"\n"}You are logged in!
            </Text>
    </View>
);

export { ScreenTwo };