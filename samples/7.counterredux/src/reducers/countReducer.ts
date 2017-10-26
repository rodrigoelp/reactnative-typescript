import { AnyAction, Reducer } from "redux";
import { ICountState } from "../models";

const initialState: ICountState = {
    currentCount: 0,
};

const CountReducer: Reducer<ICountState> = (state: ICountState = initialState, action: AnyAction): ICountState => {
    return state;
};

export { CountReducer };
