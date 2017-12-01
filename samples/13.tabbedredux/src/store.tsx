import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import { countReducer, rootNavigationReducer, secureNavigationReducer } from "./reducers";

/**
 * Creates the application store and where the state is tracked.
 */
const store = createStore(
    combineReducers({
        currentCount: countReducer,
        rootNavigator: rootNavigationReducer,
        secureNavigationState: secureNavigationReducer,
    }),
    applyMiddleware(logger, thunk));

export { store };