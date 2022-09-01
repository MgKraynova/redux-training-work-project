import {TStateNews, newsAction, actionNewsTypes} from "../types";

const DEFAULT_STATE: TStateNews = {
    latestNews: [],
    popularNews: []
}

export function newsReducer(state = DEFAULT_STATE, action: newsAction): TStateNews {
    switch (action.type) {
        case actionNewsTypes.SET_LATEST_NEWS:
            return {...state, latestNews: [...state.latestNews, ...action.payload]};
        case actionNewsTypes.SET_POPULAR_NEWS:
            return {...state, popularNews: [...state.latestNews, ...action.payload]};
        default:
            return state;
    }
}