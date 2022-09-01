import {createStore, applyMiddleware} from "redux";
import {reducer} from "./reducers/reducer";
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from "./sagas/index.js";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./reducers/index";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

sagaMiddleware.run(rootSaga);