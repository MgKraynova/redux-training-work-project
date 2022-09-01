import {getLatestNews, getPopularNews } from "../../api/index";
import {GET_NEWS} from "../../consts";
import {takeEvery, put, call, fork} from 'redux-saga/effects';
import {setLatestNewsAction, setPopularNewsAction} from "../action-creators";


export function* handleLatestNews() {
    const {hits}= yield call(getLatestNews, 'react');
    console.log(hits);

    yield put(setLatestNewsAction(hits));
}

export function* handlePopularNews() {
    const {hits}= yield call(getPopularNews);
    console.log(hits);

    yield put(setPopularNewsAction(hits));
}

export function* handleNews() {
    yield fork(handleLatestNews);
    yield fork(handlePopularNews);
}

export function* watchClickSaga() {
    yield takeEvery(GET_NEWS, handleNews);

}

export function* rootSaga() {
    yield watchClickSaga();
}