import {
    ADD_USER_DATA,
    WindowType,
    CHANGE_USER_DATA,
    RETURN,
    CHANGE_USER_NAME,
    SET_LATEST_NEWS, SET_POPULAR_NEWS, GET_NEWS
} from "../consts";
import {TNews} from "./types";

export const addUserDataAction = (name: string, surname: string) => ({
    type: ADD_USER_DATA,
    payload: {
        name,
        surname,
        windowType: WindowType.RESULT
    }
});

export const changeUserDataAction = (name: string, surname: string) => ({
    type: CHANGE_USER_DATA,
    payload: {
        name,
        surname,
        windowType: WindowType.CONFIRMATION
    }
});

export const returnAction = () => ({
    type: RETURN,
    payload: {
        windowType: WindowType.FORM
    }
});

export const changeUserNameAction = (name: string) => ({
    type: CHANGE_USER_NAME,
    payload: {
        name,
        windowType: WindowType.CONFIRMATION
    }
});

// export const getLatestNewsAction = () => ({
//     type: GET_LATEST_NEWS,
// });

export const setLatestNewsAction = (payload: TNews[]) => ({
    type: SET_LATEST_NEWS,
    payload
});

export const setPopularNewsAction = (payload: TNews[]) => ({
    type: SET_POPULAR_NEWS,
    payload
});

export const getNewsAction = () => ({
    type: GET_NEWS,
});