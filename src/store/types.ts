import {WindowType} from "../consts";

export interface TState {
    name: string,
    surname: string,
    windowType: WindowType
}

export enum actionTypes {
    ADD_USER_DATA = 'ADD_USER_DATA',
    CHANGE_USER_DATA = 'CHANGE_USER_DATA',
    RETURN = 'RETURN',
    CHANGE_USER_NAME = 'CHANGE_USER_NAME',
}

export interface addUserDataAction {
    type: actionTypes.ADD_USER_DATA,
    payload: {
        name: string,
        surname: string,
        windowType: WindowType.RESULT
    }
}

export interface changeUserDataAction {
    type: actionTypes.CHANGE_USER_DATA,
    payload: {
        name: string,
        surname: string,
        windowType: WindowType.CONFIRMATION
    }
}

export interface returnAction {
    type: actionTypes.RETURN,
    payload: {
        windowType: WindowType.FORM
    }
}

export interface changeUserNameAction {
    type: actionTypes.CHANGE_USER_NAME,
    payload: {
        name: string,
        windowType: WindowType.CONFIRMATION
    }
}

export type userDataAction = addUserDataAction | changeUserDataAction | returnAction | changeUserNameAction;