import { createStore } from "redux";
import { User } from "../models/models";
import { allReducers } from "../reducers";

export interface StoreState { // this roughly define the shape of my data as exposed by the reducers (is meant to be an aggregation of all the reducers)
    users: Array<User>;
}

// This creates the data store with all the reducers needed by the application.
export const store = createStore(allReducers);