import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addUserDataAction} from "../../store/action-creators";
import {TState} from "../../store/types";
import {useActions} from "../../hooks/useActions";

export function Form():JSX.Element {

    const nameFromStore = useSelector((state: TState) => state.name);
    const surnameFromStore = useSelector((state: TState) => state.surname);

    const [name, setName] = useState(nameFromStore);
    const [surname, setSurname] = useState(surnameFromStore);

    const {addUserDataAction} = useActions();

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