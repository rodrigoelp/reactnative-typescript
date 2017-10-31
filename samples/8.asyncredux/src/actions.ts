import { AnyAction, Dispatch } from "redux";
import { isNullOrUndefined } from "./globalfunctions";
import { IPost, IUser } from "./models";

/**
 * Defining the list of actions I will be
 * handling.
 * I prefer to create enuemrations for this
 * as opposed of having consts SHOUTING_NAMES
 *
 * Technically, is going to be the same(ish).
 */
enum ActionType {
    FetchingPosts = "POSTS_FETCHING",
    ReceivedPosts = "POSTS_RECEIVED",
    FailedFetchingPosts = "POSTS_FAILED",
    ReceivedUser = "USER_RECEIVED",
    FailedFetchingUser = "USER_FAILED",
}

/**
 * Action passed to reducers.
 */
interface ITypedAction<T> extends AnyAction {
    /**
     * Describes the type used to create the action. Any reducer subscribed to it
     * will need to inspect the type to filter it.
     */
    type: ActionType;
    /**
     * Action's payload
     */
    payload: T;
}

// I could've follow most examples that sets a timer to wait
// for a while and return with some result... But, what is the fun in that?
// Consuming a restful API is probably a more "real life" exercise... so, let's do that!
// Thankfully, there is a set of available at jsonplaceholder, which mimics the
// information provided by a blog.
// so I am going to start using the https://jsonplaceholder.typicode.com/posts api
// and build from there.

const serviceUrl = "https://jsonplaceholder.typicode.com";
const getPostsUrl = () => `${serviceUrl}/posts`;
const getPostUrl = (id: number) => `${getPostsUrl()}/${id}`;
const getUsersUrl = () => `${serviceUrl}/users`;
const getUserUrl = (id: number) => `${getUsersUrl()}/${id}`;

const fetchPostsActionCreator = (dispatch: Dispatch<any>) => () => {
    // const fetchUsersActionCreator = () => (dispatch: Dispatch<any>) => {
    // the line below tells the subscriber that I have started working
    // fetching the users.
    dispatch(createLightAction(ActionType.FetchingPosts));

    // performing the async action.
    fetchInstanceOfType<IPost[]>(getPostsUrl())
        .then((result) => dispatch(createTypedAction(ActionType.ReceivedPosts, result)))
        .catch((err) => dispatch(createLightAction(ActionType.FailedFetchingPosts)));
};

const fetchUserActionCreator = (id: number) => (dispatch: Dispatch<any>) => {
    // for this one in particular, I don't want to indicate I am
    // downloading anything to the user...

    return fetchInstanceOfType<IUser>(getUserUrl(id))
        .then((result) => dispatch(createTypedAction(ActionType.ReceivedUser, result)))
        .catch((err) => dispatch(createTypedAction(ActionType.FailedFetchingUser, { id } as IUser )));
};

// helper functions to create the actions.
function fetchInstanceOfType<T>(uri: string) {
    return fetch(uri)
        .then((response) => response.text())
        .then((content) => {
            const result: T = JSON.parse(content);
            if (isNullOrUndefined(result)) {
                throw Error(`Could not download data from the requested api ${uri}`);
            }
        });
}

function createTypedAction<T>(type: ActionType, payload: T): ITypedAction<T> {
    return { type, payload };
}

function createLightAction(type: ActionType): AnyAction {
    return { type };
}

// exporting what is meaningful... Now to get the reducer to
// respond as expected.
export { ActionType, ITypedAction, fetchPostsActionCreator };
