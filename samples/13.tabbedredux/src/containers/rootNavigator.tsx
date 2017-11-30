import * as React from "react";
import { addNavigationHelpers, StackNavigator } from "react-navigation";
import { connect } from "react-redux";
import { RouteNames } from "../routes";
import { ScreenOneContainer } from "./screenOne";
import { ScreenTwo } from "./screenTwo";
import { IAppState } from "../models";

/**
 * Defines the component handling the navigation at the root level (transitioning between users
 * that have logged in the application)
 */
const RootNavigator = StackNavigator(
    { // defines all possible routes for the current stack navigator
        [RouteNames.One]: { screen: ScreenOneContainer },
        [RouteNames.Two]: { screen: ScreenTwo }
    },
    { // and defines which of those routes is the initial one (and the state of the navigator)
        initialRouteName: RouteNames.One
    }
);

/**
 * Properties of the root navigator
 */
interface IRootNavigatorHostProps {
    navState: any;
    dispatch: any;
}
/**
 * Host of the root navigator
 */
class RootNavigatorHost extends React.PureComponent<IRootNavigatorHostProps> {
    constructor(props: IRootNavigatorHostProps) {
        super(props);
    }

    public render() {
        const navigation = addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.navState
        });
        return <RootNavigator navigation={navigation} />;
    }
}
/**
 * Transforms the application state into properties of the root
 * navigator host.
 * @param state application state.
 */
const mapStateToAppNavProps = (state: IAppState) => ({
    navState: state.nav,
});
/**
 * Turning the root navigator host component into a container.
 */
const RootNavigatorContainer = connect(mapStateToAppNavProps)(RootNavigatorHost);

export { RootNavigatorContainer, RootNavigator };