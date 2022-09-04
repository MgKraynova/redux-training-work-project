import {TNews} from "../types/news-action.types";
import {CLEAN, GET_NEWS, GET_NEWS_ERROR, GET_NEWS_LOADING, SET_LATEST_NEWS, SET_POPULAR_NEWS} from "../../consts";

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
    return ({
        type: GET_NEWS_ERROR,
        payload
    })
};