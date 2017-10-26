
import { createStore } from "redux";
import { allReducer } from "./reducers/index";

export const store = createStore(allReducer);
