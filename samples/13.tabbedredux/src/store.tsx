import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { countReducer, navReducer } from "./reducers";

/**
 * Creates the application store and where the state is tracked.
 */
const store = createStore(
    combineReducers({ currentCount: countReducer, nav: navReducer }),
    applyMiddleware(logger));

export { store };