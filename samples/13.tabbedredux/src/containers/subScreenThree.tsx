
import * as React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { IAppState } from "../models";
import { Button } from "react-native-elements";
import { INavigationScreenProps } from "./navigationHelpers";
import { RouteNames } from "../routes";

interface ISubScreenThreeProps {
    navState: any
}

type SubScreenThreeProps = ISubScreenThreeProps & INavigationScreenProps;

class SubScreenThree extends React.Component<SubScreenThreeProps> {
    constructor(props: SubScreenThreeProps) {
        super(props);
    }

    public render() {
        const { navigation } = this.props;
        // try calling the log out and you will notice the navigation used is the tab navigation... we will try to solve this next.
        return (
            <View style={{ flex: 1, backgroundColor: "cyan", justifyContent: "center" }}>
                <Button title="Log Out!" onPress={() => navigation.goBack()} />
            </View>
        );
    }
}

const mapStateToProps = (state: IAppState): ISubScreenThreeProps => {
    return {
        navState: state.secureNavigationState
    };
}

const SubScreenThreeContainer = connect(mapStateToProps)(SubScreenThree);

export { SubScreenThreeContainer };
