import { AnyAction, combineReducers, Reducer } from "redux";
import { ActionType } from "./actions";
import { ActivityStatus, IPost } from "./models";

const initialState: IPost[] = [];

/**
 * Provides all the posts, unfiltered.
 * @param state Current list of posts.
 * @param action Triggered action used to generate a new state. Just ActionType.ReceivedPosts
 * a payload can change the behaviour of returning the current state.
 * @see ActionType
 * @see IPost
 */
const postsReducer: Reducer<IPost[]> =
    (state: IPost[] = initialState, action: AnyAction): IPost[] => {
        switch (action.type) {
            case ActionType.ReceivedPosts:
                return action.payload;
            default:
                return state;
        }
    };

/**
 * NOT DOING ANYTHING WITH THIS YET.
 * @param state indicator of activity.
 * @param action modifier of the activity indicator.
 * @see ActivityStatus
 */
const activityIndicatorReducer: Reducer<ActivityStatus> =
    (state: ActivityStatus = ActivityStatus.NoActivity, action: AnyAction): ActivityStatus => {
        return state;
    };

const allReducers = combineReducers({
    activityStatus: activityIndicatorReducer,
    posts: postsReducer,
}); // remember this object should match the definition of the application state.

export { allReducers, postsReducer };
// and getting everything to work in the appShell...
