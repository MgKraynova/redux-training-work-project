import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from "./sagas";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

sagaMiddleware.run(rootSaga);