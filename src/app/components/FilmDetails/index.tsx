"use client"

import { FunctionComponent, useContext, useEffect, useState } from "react";
import { useCount } from "../../hooks/useCount";
import { ThemeContext } from "@/app/page";
import styles from './styles.module.css'
import { createPortal } from "react-dom";

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
    const { count, increment, decrement } = useCount(0);
    const theme = useContext(ThemeContext);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    // Запускается функция, если находит различия в массиве зависимостей
    // Функция запускается уже после рендеринга
    useEffect(() => {
        console.log('theme: ', theme);
        return () => {
            console.log('Вызывается перед следующим вызовом useEffect или при destroy')
        }; // Вызывается перед следующим вызовом useEffect или при destroy
    }, [count, theme]);

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
            <div>
                {isModalOpen && createPortal(<div>Modal Window</div>, document.body)}
                <button onClick={() => setIsModalOpen((isOpen) => !isOpen)}>Open Modal</button>
            </div>
        </div>
    );
}