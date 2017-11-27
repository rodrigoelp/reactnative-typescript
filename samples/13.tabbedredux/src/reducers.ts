import { Reducer, AnyAction } from "redux";
import { AppTabNavigator } from "./appScreens";

enum ActionTypes {
    GoToTab = "SelectTabIndex",
}

const tabbarReducer: Reducer<any> = (state: any, action: AnyAction) => {
    if (action.type === ActionTypes.GoToTab) {
        return { ...state, index: 0 };
    }
    return AppTabNavigator.router.getStateForAction(action, state);
};

export { tabbarReducer };