
import * as React from "react";
import { View } from "react-native";
import { connect, Dispatch } from "react-redux";
import { IAppState } from "../models";
import { Button } from "react-native-elements";
import { INavigationScreenProps } from "./navigationHelpers";
import { RouteNames } from "../routes";
import { logOutUserActionCreator } from "../reducers";
import { bindActionCreators } from "redux";

/**
 * Defines the state to be injected to the container.
 */
interface ISubScreenThreeProps {
    navState: any
}

/**
 * Defines the actions exposed to this container.
 */
interface ISubScreenThreeActions {
    logOut: () => void;
}

type SubScreenThreeProps = ISubScreenThreeProps & ISubScreenThreeActions & INavigationScreenProps;

class SubScreenThree extends React.Component<SubScreenThreeProps> {
    constructor(props: SubScreenThreeProps) {
        super(props);
    }

    public render() {
        const { navigation } = this.props;
        // try calling the log out and you will notice the navigation used is the tab navigation... we will try to solve this next.
        return (
            <View style={{ flex: 1, backgroundColor: "#8b233f", justifyContent: "center" }}>
                <Button title="Log Out!" onPress={this.logOut} />
            </View>
        );
    }

    private logOut = () => {
        this.props.logOut();
    }
}

const mapStateToProps = (state: IAppState): ISubScreenThreeProps => ({ navState: state.secureNavigationState });
const mapDispatchToProps = (dispatch: Dispatch<any>): ISubScreenThreeActions => bindActionCreators({ logOut: logOutUserActionCreator }, dispatch);

const SubScreenThreeContainer = connect(mapStateToProps, mapDispatchToProps)(SubScreenThree);

export { SubScreenThreeContainer };
