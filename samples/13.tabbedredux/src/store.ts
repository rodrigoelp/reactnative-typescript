import { applyMiddleware, combineReducers, createStore, Reducer, AnyAction } from "redux";
import { logger } from "redux-logger";
import { tabbarReducer } from "./reducers";

const getMiddleware = () => {
    return applyMiddleware(logger);
}

export default createStore(combineReducers({
    tabBar: tabbarReducer,
}), getMiddleware());
