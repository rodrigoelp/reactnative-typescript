import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { allReducers } from "./reducer";

// Let's create a store...
// const store = createStore(allReducers);

// This way, we are creating a simple store, one taking
// a set a reducers and turning it into the application state.
// the problem is, to deal with async responses we will need
// to call dispatch with the action we want to dispatch.
// That also means that my action creator changes to this signature:

// const fetchUsersActionCreator = (dispatch: Dispatch<any>) => (): void => { ... }

// And that action creator will have to be configured every time in the mapDispatchToProps as
// mapDispatchToProps(dispatch: Dispatch<any>) => { fetch: fetchUsersActionCreator(dispatch) };

// That does not sound right, isn't?
// Well... that's when the middleware comes into play.
// The middleware allows you to intercept calls and dispatch
// continuations to async calls, without you having to configure every action

const middleware = applyMiddleware(thunk); // why thunk? it has all the functionality for async stuff.
const store = createStore(allReducers, middleware);

export { store };

// now, defining the actions.ts
