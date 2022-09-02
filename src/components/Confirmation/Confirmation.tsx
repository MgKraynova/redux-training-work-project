import {useDispatch, useSelector} from "react-redux";
import {TGeneralState, TState} from "../../store/types";
import React, {useState} from "react";
import {changeUserNameAction, cleanAction, getNewsAction, returnAction} from "../../store/action-creators";
import {useActions} from "../../hooks/useActions";
import News from "../News/News";

export default function Confirmation(): JSX.Element {

    const [isChangeInput, setIsChangeInput] = useState(false);

    const nameFromStore = useSelector((state: TGeneralState) => state.reducer.name);
    const surnameFromStore = useSelector((state: TGeneralState) => state.reducer.surname);

    const latestNews = useSelector((state: TGeneralState) => state.newsReducer.latestNews);
    const popularNews = useSelector((state: TGeneralState) => state.newsReducer.popularNews);

    const isLoading = useSelector((state: TGeneralState) => state.newsReducer.isLoading);
    const error = useSelector((state: TGeneralState) => state.newsReducer.error);


    const [name, setName] = useState(nameFromStore);

    const {changeUserNameAction, getNewsAction, returnAction, cleanAction} = useActions();

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

    const handleGetNews = () => {
        getNewsAction();
    }

    const handleBackClick = () => {
        returnAction();
    }

    const renderNews = () => {
        if (isLoading) {
            return 'Загрузка';
        }

        if (error) {
            return 'Ошибка';
        }

        return (<div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'start',
            width: '1000px',
            gap: '10px'
        }}>
            <News title='LatestNews' news={latestNews}/>
            <News title='PopularNews' news={popularNews}/>
        </div>);
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
            <button onClick={handleBackClick}>Назад</button>

            <div style={{marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <button onClick={handleGetNews}>Получить список новостей</button>
                { renderNews()}
            </div>
        </div>
    )
}