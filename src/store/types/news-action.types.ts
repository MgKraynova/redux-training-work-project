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
    SET_LATEST_NEWS = "SET_LATEST_NEWS",
    SET_POPULAR_NEWS = 'SET_POPULAR_NEWS',
    GET_NEWS = 'GET_NEWS',
    GET_NEWS_LOADING = 'GET_NEWS_LOADING',
    GET_NEWS_ERROR = 'GET_NEWS_ERROR'
}

export interface setLatestNewsAction {
    type: actionNewsTypes.SET_LATEST_NEWS,
    payload: TNews[]
}

export interface setPopularNewsAction {
    type: actionNewsTypes.SET_POPULAR_NEWS,
    payload: TNews[]
}

export interface getNewsAction {
    type: actionNewsTypes.GET_NEWS,
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

