import { AnyAction, Reducer } from "redux";
import { ICountState } from "../models";
import { DECREMENT, INCREMENT } from "./actions";

// this reducer is only changing the current count.
const CountReducer: Reducer<number> = (state: number = 0, action: AnyAction): number => {
    switch (action.type) {
        case DECREMENT:
            return state - action.payload;
        case INCREMENT:
            return state + action.payload;
        default:
            return state;
    }
};

export { CountReducer };
