import { applyMiddleware, combineReducers, createStore, Reducer, AnyAction } from "redux";

const initialState: any = new Object();

const dummyReducer: Reducer<any> = (state: any = initialState, action: AnyAction): any => {
    return state;
};

export default createStore(combineReducers({
    dummy: dummyReducer
}));
