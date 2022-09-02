import {GET_NEWS_LOADING, WindowType} from "../consts";

export interface TGeneralState {
    reducer: TState,
    newsReducer: TStateNews
}

export interface TState {
    name: string,
    surname: string,
    windowType: WindowType
}

export enum actionTypes {
    ADD_USER_DATA = 'ADD_USER_DATA',
    CHANGE_USER_DATA = 'CHANGE_USER_DATA',
    RETURN = 'RETURN',
    CHANGE_USER_NAME = 'CHANGE_USER_NAME',
    CLEAN = 'CLEAN'
}

export interface addUserDataAction {
    type: actionTypes.ADD_USER_DATA,
    payload: {
        name: string,
        surname: string,
        windowType: WindowType.RESULT
    }
}

export interface changeUserDataAction {
    type: actionTypes.CHANGE_USER_DATA,
    payload: {
        name: string,
        surname: string,
        windowType: WindowType.CONFIRMATION
    }
}

export interface returnAction {
    type: actionTypes.RETURN,
    payload: {
        windowType: WindowType.FORM
    }
}

export interface changeUserNameAction {
    type: actionTypes.CHANGE_USER_NAME,
    payload: {
        name: string,
        windowType: WindowType.CONFIRMATION
    }
}

export interface cleanAction {
    type: actionTypes.CLEAN,
    payload: {
        name: string,
        surname: string
    }
}

export type userDataAction = cleanAction | addUserDataAction | changeUserDataAction | returnAction | changeUserNameAction;

export interface TStateNews {
    latestNews: TNews[],
    popularNews: TNews[],
    isLoading: boolean,
    error: Error | null
}

export interface TNews {
    author: string,
    comment_text: null | string,
    created_at: string,
    created_at_i: number,
    num_comments: number,
    objectID: string,
    parent_id: null | string,
    points: number,
    relevancy_score: number,
    story_id: null,
    story_text: null,
    story_title: null,
    story_url: null,
    title: string,
    url: string
}

export enum actionNewsTypes {
    GET_LATEST_NEWS = "GET_LATEST_NEWS",
    SET_LATEST_NEWS = "SET_LATEST_NEWS",
    SET_POPULAR_NEWS = 'SET_POPULAR_NEWS',
    GET_NEWS = 'GET_NEWS',
    GET_NEWS_LOADING = 'GET_NEWS_LOADING',
    GET_NEWS_ERROR = 'GET_NEWS_ERROR'
}

// export interface getLatestNewsAction {
//     type: actionNewsTypes.GET_LATEST_NEWS,
//     payload: {}
// }

export interface setLatestNewsAction {
    type: actionNewsTypes.SET_LATEST_NEWS,
    payload: {}
}

export interface setPopularNewsAction {
    type: actionNewsTypes.SET_POPULAR_NEWS,
    payload: {}
}

export interface getNewsAction {
    type: actionNewsTypes.GET_NEWS,
    payload: {}
}

export interface isLoadingAction {
    type: actionNewsTypes.GET_NEWS_LOADING,
    payload: boolean
}

export interface errorAction {
    type: actionNewsTypes.GET_NEWS_ERROR,
    payload: Error
}

export type newsAction = setLatestNewsAction | setPopularNewsAction | getNewsAction | isLoadingAction | errorAction;
