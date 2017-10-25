
import { combineReducers } from "redux";
import UsersReducer from "./users";
import CurrentScreenReducer from "./currentScreen"
import ActiveUserReducer from "./activeUser";
import { User } from "../models/models";

// the reducer is a simple function (at the moment) that contains the list of users
// if I got multiple reducers and merge it into one to provide it to the store.
export const allReducers = combineReducers({
    currentScreen: CurrentScreenReducer,
    users: UsersReducer,
    activeUser: ActiveUserReducer,
});
