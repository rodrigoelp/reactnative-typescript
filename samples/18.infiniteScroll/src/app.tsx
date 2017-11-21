import * as React from "react";
import { Text, View } from "react-native";

class AppShell extends React.Component {
    public render() {
        return (
            <View style={{ flex: 1, paddingVertical: 44 }}>
                <Text style={{ alignSelf: "stretch", textAlign: "center", textAlignVertical: "center" }}>
                    Boilerplate component to get typescript going.
                </Text>
            </View>
        );
    }
}

export { AppShell };
