import { AnyAction, Reducer } from "redux";
import { Screens } from "../models/screens";
import { ActionType, ITypedAction } from "./actions";

const CurrentScreenReducer: Reducer<Screens> = (state: Screens = Screens.Home, action: AnyAction): Screens => {
    const typedAction = action as ITypedAction<Screens>;

    if (!typedAction) return state;

    switch (typedAction.type) {
        case ActionType.GoToHome:
            return Screens.Home;
        case ActionType.GoToUserDetails:
            return Screens.UserDetails;
        default:
            return state;
    }
};

export default CurrentScreenReducer;
