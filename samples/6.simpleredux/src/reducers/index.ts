
import { combineReducers } from "redux";
import UsersReducer from "./users";
import CurrentScreenReducer from "./currentScreen"
import ActiveUserReducer from "./activeUser";
import { User } from "../models";
import { ActionType, ITypedAction, SetActiveUserActionCreator, SwitchToScreenActionCreator } from "./actions";

// the reducer is a simple function (at the moment) that contains the list of users
// if I got multiple reducers and merge it into one to provide it to the store.

const allReducers = combineReducers({
    currentScreen: CurrentScreenReducer,
    users: UsersReducer,
    activeUser: ActiveUserReducer,
});

export { allReducers, ActionType, ITypedAction, SetActiveUserActionCreator, SwitchToScreenActionCreator };
