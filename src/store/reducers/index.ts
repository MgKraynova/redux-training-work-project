import {combineReducers} from "@reduxjs/toolkit";
import {userReducer} from "./userReducer";
import {newsReducer} from "./newsReducer";

const rootReducer = combineReducers({
    userReducer,
    newsReducer
});

export default rootReducer;