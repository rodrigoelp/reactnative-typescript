
import * as React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { IAppState } from "../models";

class SubScreenTwo extends React.Component {
    public render() {
        return (
            <View style={{ flex: 1, backgroundColor: "magenta" }}>
            </View>
        );
    }
}

const mapStateToProps = (state: IAppState) => {
    return {};
}

const SubScreenTwoContainer = connect(mapStateToProps)(SubScreenTwo);

export { SubScreenTwoContainer };
