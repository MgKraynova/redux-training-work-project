export function* workerSaga() {

}

export function* watchClickSaga() {

}

export default function* rootSaga() {
    yield watchClickSaga();
}