import {
    ADD_USER_DATA,
    WindowType,
    CHANGE_USER_DATA,
    RETURN,
    CHANGE_USER_NAME,
    SET_LATEST_NEWS, SET_POPULAR_NEWS, GET_NEWS, CLEAN, GET_NEWS_LOADING, GET_NEWS_ERROR
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

type cleanPayload = {
    name: string,
    surname: string
}
export const cleanAction = (payload: cleanPayload) => ({
    type: CLEAN,
    payload
});

export const isLoadingAction = (payload: boolean) => ({
    type: GET_NEWS_LOADING,
    payload
});

export const errorAction = (payload: Error) => {
    console.log('payload', payload);
    return ({
        type: GET_NEWS_ERROR,
        payload
    })
};

// export const finishLoadingAction = () => ({
//     type: GET_NEWS_SUCCESS,
// });