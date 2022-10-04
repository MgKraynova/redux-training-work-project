import errorImage from 'src/images/errorImage.svg';
import React, {Component, ErrorInfo, ReactNode} from "react";

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
    };

    public static getDerivedStateFromError(_: Error): State {
        // Этот метод жизненного цикла вызывается после возникновения ошибки у компонента-потомка.
        // вызывается во время этапа «рендера»
        console.log('запускаем getDerivedStateFromError');
        return {hasError: true};
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // запускается после возникновения ошибки
        console.log('запускаем componentDidCatch');
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        // запускается при инициализации приложения. Он проверяет this.props и this.state
        console.log('запускаем render()');
        if (this.state.hasError) {
            return (
                <div style={{
                    display: "flex", justifyContent: "center", flexDirection: "column",
                    margin: 'auto', alignItems: 'center'
                }}>
                    <h1 style={{color: "white"}}>Извините, произошла ошибка</h1>
                    <img style={{width: '300px'}} src={errorImage} alt='Ошибка'/>
                </div>
            );
        }

        return this.props.children;
    }
}