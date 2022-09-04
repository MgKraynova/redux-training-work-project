import {TNews} from "../../store/types/news-action.types";

type TProps = {
    news: TNews[],
    title: string
}

export default function News({news, title}: TProps) {

    if (!news || news.length === 0) {
        return null;
    }

    return (
        <div style={{width: '400px', display: 'flex', justifyContent: 'center', alignItems: "center", flexDirection: 'column', boxSizing: 'border-box'}}>
            <h2 style={{color: 'red'}}>{title}</h2>
            {news.map((item) => (
                <div style={{padding: '15px', border: '1px solid white', width: '400px', boxSizing: 'border-box'}}>
                    <h3>{item.title}</h3>
                </div>
            ))}
        </div>
    )

}