import { AnyAction, Reducer } from "redux";
import { ICountState } from "../models";

const initialState: ICountState = {
    currentCount: 0,
};

// this reducer is only changing the current count.
const CountReducer: Reducer<number> = (state: number = initialState.currentCount, action: AnyAction): number => {
    return state;
};

export { CountReducer };
