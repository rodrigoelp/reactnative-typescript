
import { User } from "../models/models";

export enum ActionType {
    UserSelected = "USER_SELECTED",
}

export interface ActionInfo<T> {
    type: ActionType;
    payload: T;
}

export const selectUserActionCreator = (user: User) : ActionInfo<User> => {
    console.assert(user !== undefined, `You provided an undefined user to be selected.`);
    console.log(`triggering user selection for ${user.name}`);
    return {
        type: ActionType.UserSelected,
        payload: user
    };
}