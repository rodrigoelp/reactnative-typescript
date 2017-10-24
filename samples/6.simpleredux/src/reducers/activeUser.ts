import { User, Gender } from "../models/models";
import { ActionInfo, ActionType } from "./actions";

export const invalidUser: User = {
    id: 0,
    gender: Gender.Other,
    name: "",
    userName: "",
    ownGames: [],
};

export function ActiveUserReducer(state: User = invalidUser, action: any) : any {
    if (action.type === ActionType.UserSelected) {
        return action.payload;
    }
    return state;
}
