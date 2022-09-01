import {createStore, compose, applyMiddleware} from "redux";
import {reducer} from "./reducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas";
import { composeWithDevTools } from "@redux-devtools/extension";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware)
    )
  );

sagaMiddleware.run(rootSaga);