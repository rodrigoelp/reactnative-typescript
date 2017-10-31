import { AnyAction, combineReducers, Reducer } from "redux";
import { ActionType } from "./actions";
import { ActivityStatus, IAppState, IPost, IUser } from "./models";

const initialState: IAppState = {
    activityStatus: ActivityStatus.NoActivity,
    posts: [],
    users: [],
};

/**
 * Provides all the posts, unfiltered.
 * @param state Current list of posts.
 * @param action Triggered action used to generate a new state. Just ActionType.ReceivedPosts
 * a payload can change the behaviour of returning the current state.
 * @see ActionType
 * @see IPost
 */
const postsReducer: Reducer<IPost[]> =
    (state: IPost[] = initialState.posts, action: AnyAction): IPost[] => {
        switch (action.type) {
            case ActionType.ReceivedPosts:
                return action.payload;
            default:
                return state;
        }
    };

/**
 * Tracks any activity done in the background requiring UI indication.
 * @param state indicator of activity.
 * @param action modifier of the activity indicator.
 * @see ActivityStatus
 */
const activityIndicatorReducer: Reducer<ActivityStatus> =
    (state: ActivityStatus = initialState.activityStatus, action: AnyAction): ActivityStatus => {
        switch (action.type) {
            case ActionType.FetchingPosts: return ActivityStatus.Loading;
            case ActionType.ReceivedPosts: return ActivityStatus.Loaded;
            case ActionType.FailedFetchingPosts: return ActivityStatus.LoadingFailed;
            default: return state;
        }
    };

const usersReducer: Reducer<IUser[]> =
    (state: IUser[] = initialState.users, action: AnyAction) => {
        switch (action.type) {
            case ActionType.ReceivedUsers: return action.payload;
            default: return state;
        }
    };

const allReducers = combineReducers({
    activityStatus: activityIndicatorReducer,
    posts: postsReducer,
    users: usersReducer,
}); // remember this object should match the definition of the application state.

export { allReducers, postsReducer };
// and getting everything to work in the appShell...
