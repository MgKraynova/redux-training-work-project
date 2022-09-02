import {TStateNews, newsAction, actionNewsTypes} from "../types";

const DEFAULT_STATE: TStateNews = {
    latestNews: [],
    popularNews: [],
    isLoading: false,
    error: null
}

export function newsReducer(state = DEFAULT_STATE, action: newsAction): TStateNews {
    switch (action.type) {
        case actionNewsTypes.SET_LATEST_NEWS:
            return {...state, latestNews: [...state.latestNews, ...action.payload]};
        case actionNewsTypes.SET_POPULAR_NEWS:
            return {...state, popularNews: [...state.latestNews, ...action.payload]};
        case actionNewsTypes.GET_NEWS_LOADING:
            return {...state, isLoading: action.payload};
        case actionNewsTypes.GET_NEWS_ERROR: {
            console.log('action.payload', action.payload);
            return {...state, error: action.payload}
        }
        default:
            return state;
    }
}