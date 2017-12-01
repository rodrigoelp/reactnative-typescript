import * as React from "react";
import { View, Text } from "react-native";
import { SecureNavigatorContainer } from "./tabNavigator";

/**
 * Just a filler view giving us feedback about the transition to a second screen.
 */
const ScreenTwo = () => (
    <View style={{ flex: 1, backgroundColor: "#bdedff" }}>
        {/* <Text style={{ flex: 1, textAlign: "center", textAlignVertical: "center" }}>
            Congratulations!{"\n"}You are logged in!
            </Text> */}
        <SecureNavigatorContainer />
    </View>
);

export { ScreenTwo };