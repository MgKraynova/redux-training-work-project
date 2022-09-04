import {WindowType} from "../../consts";
import {TNews} from "./news-action.types";

export interface TGeneralState {
    userReducer: TStateUser,
    newsReducer: TStateNews
}

export interface TStateUser {
    name: string,
    surname: string,
    windowType: WindowType
}

export interface TStateNews {
    latestNews: TNews[],
    popularNews: TNews[],
    isLoading: boolean,
    error: Error | null
}