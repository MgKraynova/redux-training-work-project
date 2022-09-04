<h1 align="center">Redux training work project</h1>

Небольшой проект для тренировки использования redux, redux-saga, typescript.

## Используемые технологии 
React, TypeScript, Redux, Redux-saga

## Особенности
- в проекте используются реакт хуки useSelector, useDispatch, useState;
- создан пользовательский хук useActions для вызова напрямую action creators;
- сделана типизация state, actions, props и components;
- стор сделан с помощью combineReducers; 
- в проект подключен sagaMiddleware;
- с помощью саги отслеживаются экшены GET_NEWS, RETURN;
- при получении новостей с помощью саги вызывается isLoadingAction, на фронте показывается фраза 'Загрузка';
- после получения данных от сервера новости отрисовываются на фронте, при возникновении ошибки получения данных на фронте появляется сообщение об ошибке.



