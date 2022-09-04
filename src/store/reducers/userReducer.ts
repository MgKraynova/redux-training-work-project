import {WindowType} from "../../consts";
import {actionUserTypes,userDataAction} from "../types/user-action.types";
import {TStateUser} from "../types/state.types";

const DEFAULT_STATE: TStateUser = {
    name: '',
    surname: '',
    windowType: WindowType.FORM
}

export function userReducer(state = DEFAULT_STATE, action: userDataAction): TStateUser {
    switch (action.type) {
        case actionUserTypes.ADD_USER_DATA:
            return {...state, ...action.payload};
        case actionUserTypes.CHANGE_USER_DATA:
            return {...state, ...action.payload};
        case actionUserTypes.RETURN:
            return {...state, ...action.payload};
        case actionUserTypes.CHANGE_USER_NAME:
            return {...state, ...action.payload};
        case actionUserTypes.CLEAN:
            return {...state, ...action.payload};
        default:
            return state;
    }
}