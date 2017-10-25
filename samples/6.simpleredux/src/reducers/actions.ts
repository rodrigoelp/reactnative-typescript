
import { User, ScreenName } from "../models/models";
import { AnyAction } from "redux";

export enum ActionType {
    SwitchContainer = "SWITCH_CONTAINER",
    SetActiveUser = "SET_ACTIVE_USER",
}

export interface ITypedAction<T> extends AnyAction {
    type: ActionType;
    payload: T;
}

export const SetActiveUserActionCreator = (user: User) : ITypedAction<User> => {
    console.assert(user !== undefined, `You provided an undefined user to be selected.`);
    console.log(`triggering user selection for ${user.name}`);
    return {
        type: ActionType.SetActiveUser,
        payload: user
    };
}

export const SwitchToScreenActionCreator = (screen: ScreenName): ITypedAction<ScreenName> => {
    console.log(`Switching current container to: ${ScreenName[screen]}`);
    return {
        type: ActionType.SwitchContainer,
        payload: screen,
    };
};