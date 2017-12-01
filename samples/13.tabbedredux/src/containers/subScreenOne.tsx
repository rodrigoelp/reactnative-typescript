import * as React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { IAppState } from "../models";

class SubScreenOne extends React.Component {
    public render() {
        return (
            <View style={{ flex: 1, backgroundColor: "purple", justifyContent: "center" }}>
                <Text style={{ textAlignVertical: "center", textAlign: "center", color: "white" }}>
                    Woohoo!{"\n\n"}
                    You have been able to log into the platform without issues!
                </Text>
            </View>
        );
    }
}

const mapStateToProps = (state: IAppState) => {
    return {};
}

const SubScreenOneContainer = connect(mapStateToProps)(SubScreenOne);

export { SubScreenOneContainer };
