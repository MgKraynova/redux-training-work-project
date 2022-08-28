import {useDispatch, useSelector} from "react-redux";
import {TState} from "../../store/types";
import React, {useState} from "react";
import {changeUserNameAction} from "../../store/action-creators";
import {useActions} from "../../hooks/useActions";

export default function Confirmation(): JSX.Element {

    const [isChangeInput, setIsChangeInput] = useState(false);

    const nameFromStore = useSelector((state: TState) => state.name);
    const surnameFromStore = useSelector((state: TState) => state.surname);

    const [name, setName] = useState(nameFromStore);

    const {changeUserNameAction} = useActions();

    const handleClick = () => {
        setIsChangeInput(true);
    }

    const handleChangeNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleSubmit = () => {
        changeUserNameAction(name);
        setIsChangeInput(false);
    }

    return (
        <div style={{display: 'flex', color: 'white', flexDirection: 'column', alignItems: 'center', gap: '15px'}}>
            <h1 style={{margin: 0}}>Поздравляем!</h1>
            <p style={{margin: 0}}>Ваши данные записаны и отправлены на сервер:</p>

            <div style={{display: 'flex', gap: '10px'}}>
                {isChangeInput
                    ? <>
                        <form style={{display: 'flex', gap: '10px'}} onSubmit={handleSubmit}>
                            <input onChange={handleChangeNameInput} value={name}/>
                            <button type='submit'>Подтвердить</button>
                        </form>
                    </>
                    : <>
                        <p style={{margin: 0}}>{`Имя: ${nameFromStore}`}</p>
                        <button onClick={handleClick} type="button">Изменить имя</button>
                    </>
                }
            </div>
            <p style={{margin: 0}}>{`Фамилия: ${surnameFromStore}`}</p>
        </div>
    )
}