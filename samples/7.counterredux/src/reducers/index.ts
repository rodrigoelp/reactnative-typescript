import { combineReducers } from "redux";
import { CountReducer } from "./countReducer";

// this is the part that is confusing to me at the moment.
// the interface we are defining here, needs to match the
// contract/interface of the state we are using.
//
// Because my ICountState has that currentCount property
// we need to provide a matching property by name. I wish
// this could be tied down by the interface itself.
export const allReducer = combineReducers({ currentCount: CountReducer });
