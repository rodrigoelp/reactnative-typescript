import * as React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { IAppState } from "../models";
import { Text } from "react-native-elements";

/**
 * This is the very first screen to be displayed as part of the tab bar.
 * Is intended to be hosted by a tabbar and will display a congratulatory message
 * to the user for their successful usage of a button.
 */
class SubScreenOne extends React.Component {
    public render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#848889", justifyContent: "center" }}>
                <Text h1={true} style={{ textAlignVertical: "center", textAlign: "center", color: "white" }}>
                    Woohoo!
                </Text>
                <Text style={{ textAlignVertical: "center", textAlign: "center", color: "white" }}>
                    {"\n\n"}
                    You have been able to log into the platform without issues!
                </Text>
            </View>
        );
    }
}

/**
 * This mapper is not required by the application. I just wanted to be consistant exposing a container
 * as opposed to a component.
 * @param state application state
 */
const mapStateToProps = (state: IAppState) => {
    return {};
}

/**
 * Connected container of the screen one of a secure area.
 */
const SubScreenOneContainer = connect(mapStateToProps)(SubScreenOne);

export { SubScreenOneContainer };
