import * as React from "react";
import { AnyAction } from "redux";
import { NavigationActions } from "react-navigation";
import { RootNavigator, SecureNavigator } from "./containers";
import { ActionType } from "./models";
import { RouteNames } from "./routes";
import { Dispatch } from "react-redux";

const initialCountState = 42;
/**
 * This reducer will allow me to mutate data if required. At the moment I will
 * fix it to the answer of life, universe and everything.
 * 
 * This reducer is a dummy reducer, does not need to be here.
 * 
 * @param state state of the counter.
 * @param action action indicating how to change the state.
 */
const countReducer = (state: number = initialCountState, action: AnyAction): number => {
    let newState = state;
    switch (action.type) {
        case "Adjust":
            newState = action.adjust(state);
            break;
        default:
            break; 
    }
    return newState;
}

/**
 * Allows to change the store and its nav property.
 * @param state no idea what this state really is.
 * @param action the action provided will be used to determine if the user is logging in or logging out
 * triggering the appropriate navigation.
 */
const rootNavigationReducer = (state: any, action: AnyAction) => {
    let nextState: any;
    switch (action.type) {
        case ActionType.UserLoggedIn:
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: RouteNames.Two }),
                state
            );
            break;
        case ActionType.UserLoggedOut:
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.back(),
                state
            );
            break;
        default:
            nextState = RootNavigator.router.getStateForAction(action, state);
            break;
    }
    return nextState || state;
}

/**
 * Allows to change store for the secure area.
 * @param state this state is meaningless for the tabs.
 * @param action action specifying information to the tabbar.
 */
const secureNavigationReducer = (state: any, action: AnyAction) => {
    const newState = SecureNavigator.router.getStateForAction(action, state);
    return newState || state;
}

/**
 * Action creator used to log in somebody.
 */
const logInUserActionCreator = () => (dispatch: Dispatch<any>) => {
    dispatch({ type: ActionType.UserLoggedIn });
}
/**
 * Action creator used to log out somebody.
 */
const logOutUserActionCreator = () => (dispatch: Dispatch<any>) => {
    dispatch({ type: ActionType.UserLoggedOut });
}

type adjustmentFunction = (x: number) => number;

const adjustCounterActionCreator = (adjust: adjustmentFunction) => (dispatch: Dispatch<any>) => {
    dispatch({ type: "Adjust", adjust });
}

export { countReducer, rootNavigationReducer, secureNavigationReducer, logInUserActionCreator, logOutUserActionCreator, adjustmentFunction, adjustCounterActionCreator };