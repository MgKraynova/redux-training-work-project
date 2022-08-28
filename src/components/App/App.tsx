import React from 'react';
import {Form} from "../Form/Form";
import {WindowType} from "../../consts";
import {useSelector} from "react-redux";
import {TState} from "../../store/types";
import Confirmation from "../Confirmation/Confirmation";
import {Result} from "../Result/Result";

export default function App(): JSX.Element {

    const windowType = useSelector((state: TState) => state.windowType);

    const renderContent = () => {
        switch (windowType) {
            case WindowType.FORM:
                return <Form />;
            case WindowType.RESULT:
                return <Result />;
            case WindowType.CONFIRMATION:
                return <Confirmation />;
            default:
                return null;
        }
    }
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            {renderContent()}
        </div>
    )
}





