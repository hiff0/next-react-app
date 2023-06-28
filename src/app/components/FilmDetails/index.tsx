"use client"

import { FunctionComponent, useEffect } from "react";
import { useCount } from "../../hooks/useCount";
import styles from './styles.module.css'

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
    // Если дефолтное значение вычесляется, то передаем функцию,
    // чтобы значение не присваивалось заново при перерендеренге
    const {count, increment, decrement} = useCount(0);

    // Запускается функция, если находит различия в массиве зависимостей
    // Функция запускается уже после рендеринга
    useEffect(() => {
        console.log('count: ', count);
        return () => {
            console.log('Вызывается перед следующим вызовом useEffect или при destroy')
        }; // Вызывается перед следующим вызовом useEffect или при destroy
    }, [count]);

    return (
        <div>
            <p className={styles.title}>{title || 'Unknow Film'}</p>
            {Boolean(genre) && <p>{genre}</p>}
            <p>{seasonsCount > 0 ? `Количество просмотров: ${seasonsCount}` : 'Зииро'}</p>
            <div>
                {count}
                <button onClick={decrement}>минус 1</button>
                <button onClick={increment}>плюс 1</button>
            </div>
        </div>
    );
}