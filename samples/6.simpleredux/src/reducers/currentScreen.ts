import { AnyAction, Reducer } from "redux";
import { ScreenName } from "../models/models";
import { ActionType, ITypedAction } from "./actions";

const CurrentScreenReducer: Reducer<ScreenName> = (state: ScreenName = ScreenName.Home, action: AnyAction): ScreenName => {
    const typedAction = action as ITypedAction<ScreenName>;

    if (!typedAction) return state;

    if (typedAction.type === ActionType.SwitchContainer) {
        return typedAction.payload;
    }
    return state;

};

export default CurrentScreenReducer;
