import {WindowType} from "../../consts";

export enum actionUserTypes {
    ADD_USER_DATA = 'ADD_USER_DATA',
    CHANGE_USER_DATA = 'CHANGE_USER_DATA',
    RETURN = 'RETURN',
    CHANGE_USER_NAME = 'CHANGE_USER_NAME',
    CLEAN = 'CLEAN'
}

export interface addUserDataAction {
    type: actionUserTypes.ADD_USER_DATA,
    payload: {
        name: string,
        surname: string,
        windowType: WindowType.RESULT
    }
}

export interface changeUserDataAction {
    type: actionUserTypes.CHANGE_USER_DATA,
    payload: {
        name: string,
        surname: string,
        windowType: WindowType.CONFIRMATION
    }
}

export interface returnAction {
    type: actionUserTypes.RETURN,
    payload: {
        windowType: WindowType.FORM
    }
}

export interface changeUserNameAction {
    type: actionUserTypes.CHANGE_USER_NAME,
    payload: {
        name: string,
        windowType: WindowType.CONFIRMATION
    }
}

export interface cleanAction {
    type: actionUserTypes.CLEAN,
    payload: {
        name: string,
        surname: string
    }
}

export type userDataAction = cleanAction | addUserDataAction | changeUserDataAction | returnAction | changeUserNameAction;