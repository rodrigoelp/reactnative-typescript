import * as React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { Screens } from "../models/screens";
import { appStyles } from "../styles";
import { IStoreState } from "../stores/store";
    import UserBoard from "../containers/userBoard";

interface IViewPresenterProps {
    screenOnDisplay: Screens;
}

class ViewPresenter extends React.Component<any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        const props = this.props as IViewPresenterProps;
        return this.getViewFor(props.screenOnDisplay);
    }

    getViewFor(screen: Screens): JSX.Element {
        switch (screen) {
            case Screens.Home:
                return <UserBoard />;
            case Screens.UserDetails:
                return <View style={appStyles.appContainer} />;
        }
    }
}

function mapStateToProps(state: IStoreState) {
    return {
        screenOnDisplay: state.currentScreen
    } as IViewPresenterProps;
}

export default connect(mapStateToProps)(ViewPresenter);