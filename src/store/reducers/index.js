import {combineReducers} from "@reduxjs/toolkit";
import {reducer} from "./reducer";
import {newsReducer} from "./newsReducer";

const rootReducer = combineReducers({
    reducer,
    newsReducer
});

export default rootReducer;