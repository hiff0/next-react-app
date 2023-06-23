import { FunctionComponent } from "react";

interface Props {
    title: string;
    genre: 'comedy' | 'horror';
    seasonsCount: number;
}

export const FilmDetails: FunctionComponent<Props> = ({
    title,
    genre,
    seasonsCount
}) => {
    let count = 0;

    return (
        <div>
            <p>{title || 'Unknow Film'}</p>
            {Boolean(genre) && <p>{genre}</p>}
            <p>{seasonsCount > 0 ? `Количество просмотров: ${seasonsCount}` : 'Зииро'}</p>
            <div>
                {count}
                <button onClick={() => {count = count - 1}}>минус 1</button>
                <button onClick={() => {count = count + 1}}>плюс 1</button>
            </div>
        </div>
    );
}