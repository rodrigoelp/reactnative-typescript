
import * as React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { IAppState } from "../models";
import { Text } from "react-native-elements";

/**
 * Second screen of a tab navigator.
 * 
 * It tells you the container is empty.
 */
class SubScreenTwo extends React.Component {
    public render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#ae8f63", justifyContent: "center" }}>
                <Text style={{ textAlignVertical: "center", textAlign: "center", color: "white" }}>
                    This container is not using any property... the map to state is completely empty
                </Text>
            </View>
        );
    }
}

/**
 * Again, trying to be consistent when exposing my objects. I just needed a
 * function to map the app state to nothing.
 * @param state application state
 */
const mapStateToProps = (state: IAppState) => {
    return {};
}

/**
 * Connected container of screen two of a secure area.
 */
const SubScreenTwoContainer = connect(mapStateToProps)(SubScreenTwo);

export { SubScreenTwoContainer };
