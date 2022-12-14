import {getLatestNews, getPopularNews } from "../../api";
import {GET_NEWS, RETURN} from "../../consts";
import {takeEvery, put, call, fork} from 'redux-saga/effects';
import {setLatestNewsAction, setPopularNewsAction, cleanAction, isLoadingAction, errorAction} from "../action-creators/news-action-creators";


export function* handleLatestNews() {
    yield put(isLoadingAction(true));

    try {
        const {hits}= yield call(getLatestNews, 'react');
        yield put(setLatestNewsAction(hits));
    } catch (error: any) {
        yield put(errorAction(error));
    } finally {
        yield put(isLoadingAction(false));
    }

}

export function* handlePopularNews() {
    yield put(isLoadingAction(true));
    try {
        const {hits}= yield call(getPopularNews);
        yield put(setPopularNewsAction(hits));
    } catch (error: any) {
        yield put(errorAction(error));
    } finally {
        yield put(isLoadingAction(false));
    }

}

export function* handleNews() {
    yield fork(handleLatestNews);
    yield fork(handlePopularNews);
}

export function* handleClean() {
    yield put(cleanAction({name: '', surname: ''}));
}

export function* watchClickSaga() {
    yield takeEvery(GET_NEWS, handleNews);

    yield takeEvery(RETURN, handleClean);
}

export function* rootSaga() {
    yield watchClickSaga();
}