import React, {useState} from "react";
import {useSelector} from "react-redux";
import {TGeneralState} from "../../store/types/state.types";
import {useActions} from "../../hooks/useActions";
import * as userActionCreators from '../../store/action-creators/user-action-creators';

export function Form():JSX.Element {

    const nameFromStore = useSelector((state: TGeneralState) => state.userReducer.name);
    const surnameFromStore = useSelector((state: TGeneralState) => state.userReducer.surname);

    const [name, setName] = useState(nameFromStore);
    const [surname, setSurname] = useState(surnameFromStore);

    const {addUserDataAction} = useActions(userActionCreators);

    const handleChangeNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleChangeSurnameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSurname(e.target.value);
    }

    const handleSubmit = () => {
        addUserDataAction(name, surname);
    };

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <h1 style={{color: 'white'}}>Введите, пожалуйста, данные</h1>
            <form style={{display: 'flex', flexDirection: 'column', gap: '15px', width: '200px'}} onSubmit={handleSubmit}>
                <input value={name} type='text' onChange={handleChangeNameInput} placeholder='Имя'/>
                <input value={surname} type='text' onChange={handleChangeSurnameInput} placeholder='Фамилия'/>
                <button type='submit'>
                    Сохранить
                </button>
            </form>
        </div>
    );
}