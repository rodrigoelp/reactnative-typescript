import { AnyAction, Reducer } from "redux";
import { User, Gender } from "../models/models";
import { ITypedAction, ActionType } from "./actions";

export const invalidUser: User = {
    id: -1,
    name: "INVALID",
    userName: "INVALID",
    gender: Gender.Other,
    ownGames: [],
};

const ActiveUserReducer: Reducer<User> = (state: User = invalidUser, action: AnyAction): User => {
    const typedAction = action as ITypedAction<User>;
    if (typedAction.type === ActionType.SetActiveUser) {
        return typedAction.payload;
    }
    return state;
};

export default ActiveUserReducer;