
import { combineReducers } from "redux";
import UserReducer from "./users";
import CurrentScreenReducer from "./screen"
import { User } from "../models/models";

// the reducer is a simple function (at the moment) that contains the list of users
// if I got multiple reducers and merge it into one to provide it to the store.
export const allReducers = combineReducers({
    currentScreen: CurrentScreenReducer,
    users: UserReducer,
});
