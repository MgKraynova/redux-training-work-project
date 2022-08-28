import {ADD_USER_DATA, WindowType, CHANGE_USER_DATA, RETURN} from "../consts";

export const addUserDataAction = (name: string, surname: string) => ({
    type: ADD_USER_DATA,
    payload: {
        name,
        surname,
        windowType: WindowType.RESULT
    }
});

export const changeUserDataAction = (name: string, surname: string) => ({
    type: CHANGE_USER_DATA,
    payload: {
        name,
        surname,
        windowType: WindowType.CONFIRMATION
    }
});

export const returnAction = () => ({
    type: RETURN,
    payload: {
        windowType: WindowType.FORM
    }
});

export const changeUserNameAction = (name: string) => ({
    type: RETURN,
    payload: {
        name,
        windowType: WindowType.CONFIRMATION
    }
});