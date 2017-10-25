
import { User } from "../models/models";
import { AnyAction } from "redux";

export enum ActionType {
    GoToHome = "NAVIGATE_HOME",
    GoToUserDetails = "NAVIGATE_USER_DETAILS",
}

export interface ITypedAction<T> extends AnyAction {
    type: ActionType;
    payload: T;
}

export const selectUserActionCreator = (user: User) : ITypedAction<User> => {
    console.assert(user !== undefined, `You provided an undefined user to be selected.`);
    console.log(`triggering user selection for ${user.name}`);
    return {
        type: ActionType.GoToUserDetails,
        payload: user
    };
}