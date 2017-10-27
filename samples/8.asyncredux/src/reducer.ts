import { combineReducers } from "redux";

// planning on downloading this, or pushing my own set of data.
// http://rest.learncode.academy/api/learncode/friends

const friendsReducer = (state: any, action: any): any => {
    return state;
};

const allReducers = combineReducers({
    friends: friendsReducer,
});

export { allReducers, friendsReducer };
