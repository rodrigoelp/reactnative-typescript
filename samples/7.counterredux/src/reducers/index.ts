import { combineReducers } from "redux";
import { CountReducer } from "./countReducer";

export const allReducer = combineReducers({ count: CountReducer });
