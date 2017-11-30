import * as React from "react";
import { AnyAction } from "redux";
import { RootNavigator } from "./containers";

const initialCountState = 42;
/**
 * This reducer will allow me to mutate data if required. At the moment I will
 * fix it to the answer of life, universe and everything.
 * @param state state of the counter (IAppState.count)
 * @param action action indicating how to change the state.
 */
const countReducer = (state: number = initialCountState, action: AnyAction): number => {
    return state;
}

/**
 * Allows to change the store and its nav property.
 * @param state no idea what this state really is.
 * @param action
 */
const navReducer = (state: any, action: AnyAction) => {
    const newState = RootNavigator.router.getStateForAction(action, state);
    return newState || state;
}

export { countReducer, navReducer };