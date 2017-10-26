import * as React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import * as Redux from "redux";
import { Dispatch } from "redux";
import { ICountState } from "../models";

class CounterApp extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <View>
            </View>
        );
    }
}

function mapStateToProps(state: ICountState) {
    return {
    };
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);
