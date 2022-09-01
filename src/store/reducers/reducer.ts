import {WindowType} from "../../consts";
import {actionTypes, TState, userDataAction} from "../types";

const DEFAULT_STATE: TState = {
    name: '',
    surname: '',
    windowType: WindowType.FORM
}

export function reducer(state = DEFAULT_STATE, action: userDataAction): TState {
    switch (action.type) {
        case actionTypes.ADD_USER_DATA:
            return {...state, ...action.payload};
            // либо
            // return {
            //     name: action.payload.name,
            //     surname: action.payload.surname,
            //     windowType: action.payload.windowType}
        case actionTypes.CHANGE_USER_DATA:
            return {...state, ...action.payload};
        case actionTypes.RETURN:
            return {...state, ...action.payload};
        case actionTypes.CHANGE_USER_NAME:
            return {...state, ...action.payload};
        default:
            return state;
    }
}