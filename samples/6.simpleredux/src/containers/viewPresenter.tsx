import * as React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { appStyles } from "../styles";
import { IStoreState } from "../stores/store";
import UserBoard from "../containers/userBoard";
import { ScreenName } from "../models/models";

interface IViewPresenterProps {
    screenOnDisplay: ScreenName;
}

class ViewPresenter extends React.Component<any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        const props = this.props as IViewPresenterProps;
        return this.getViewFor(props.screenOnDisplay);
    }

    getViewFor(screen: ScreenName): JSX.Element {
        switch (screen) {
            case ScreenName.Home:
                return <UserBoard />;
            case ScreenName.UserDetails:
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