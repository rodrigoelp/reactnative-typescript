
import * as React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { Dispatch } from "redux";

class AppShell extends React.Component {
    public render() {
        return (
            <View>
            </View>
        );
    }
}

function mapStateToProps(state: any): any {
    return {};
}

function mapDispatchToProps(dispatch: Dispatch<any>): any {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(AppShell);
