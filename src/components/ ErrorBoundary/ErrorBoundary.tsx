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
        return {hasError: true};
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    handleClick() {
        return {hasError: false};
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    display: "flex", justifyContent: "center", flexDirection: "column",
                    margin: 'auto', alignItems: 'center'
                }}>
                    <h1 style={{color: "white"}}>Извините, произошла ошибка</h1>
                    <img style={{width: '300px'}} src={errorImage} alt='Ошибка'/>
                    <button style={{width: '160px', margin: 'auto'}} onClick={this.handleClick}>
                        Вернуться на главную страницу
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}