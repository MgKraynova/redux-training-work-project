import React, {useState} from "react";
import { useSelector} from "react-redux";
import {TGeneralState} from "../../store/types/state.types";
import {useActions} from "../../hooks/useActions";
import * as userActionCreators from '../../store/action-creators/user-action-creators';

export function Result(): JSX.Element {

    const nameFromStore = useSelector((state: TGeneralState) => state.userReducer.name);
    const surnameFromStore = useSelector((state: TGeneralState) => state.userReducer.surname);

    const [name, setName] = useState(nameFromStore);
    const [surname, setSurname] = useState(surnameFromStore);

    const {changeUserDataAction, returnAction} = useActions(userActionCreators);

    const handleChangeNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleChangeSurnameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSurname(e.target.value);
    }

    const handleSubmit = () => {
        changeUserDataAction(name, surname);
    }

    const handleClick = () => {
        returnAction();
    }

    return (
        <div style={{color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <h1 style={{margin: 0, marginBottom: '10px'}}>Проверьте введенные вами данные</h1>
            <h2 style={{margin: 0}}>При необходимости вы можете их изменить</h2>

            <form style={{marginTop: '25px'}} onSubmit={handleSubmit}>
                <div style={{display: "flex", justifyContent: 'end', gap: '10px'}}>
                    <p style={{color: 'white', margin: 0}}>Имя</p>
                    <input onChange={handleChangeNameInput} value={name} />
                </div>
                <div style={{display: "flex", justifyContent: 'end', gap: '10px'}}>
                    <p style={{color: 'white', margin: 0}}>Фамилия</p>
                    <input onChange={handleChangeSurnameInput} value={surname}/>
                </div>

                <div style={{display: "flex", justifyContent: 'center', gap: '10px', marginTop: '25px'}}>
                    <button type='button' onClick={handleClick}>Назад</button>
                    <button type='submit'>Подтвердить</button>
                </div>
            </form>
        </div>
    );
}