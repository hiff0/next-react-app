"use client"

import { ChangeEvent, FunctionComponent, useCallback, useEffect, useReducer, useRef } from "react";

enum FORM_ACTIONS {
    setName = 'setName',
    setText = 'setText',
    setRating = 'setRating'
}

interface State {
    name: string;
    text: string;
    rating: number;
}

type Action =  {
    type: 'setName';
    payload: {
        name: string;
    }
} | {
    type: 'setText';
    payload: {
        text: string;
    }
} | {
    type: 'setRating';
    payload: {
        rating: number;
    }
}

export const ReviewForm: FunctionComponent = () => {
    // Если состаяния связаны между собой и их несколько,
    // то использовать хук useReducer
    const initialState: State = {
        name: 'Vlad',
        text: 'text',
        rating: 10
    }

    const reducer = (state: State, action: Action): State => {
        switch (action.type) { 
            case 'setName':
                return {
                    ...state,
                    name: action.payload.name,
                };
            case 'setText':
                return {
                    ...state,
                    text: action.payload.text
                };
            case 'setRating': 
                return {
                    ...state,
                    rating: action.payload.rating
                };
            default: 
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const onNameChange  = (event: ChangeEvent) => dispatch({type: FORM_ACTIONS.setName, payload: { name: (event.target as HTMLInputElement).value }})

    // useRef можно использовать как хранплище
    // запись в current значения не вызывает перерендер
    const ref = useRef();

    // useEffect(() => {
    //     if (ref.current) {
    //         ref.current.focus();
    //     }

    //     return () => {}
    // }, [])

    const setFocus = useCallback((element: HTMLInputElement) => {
        element.focus();
    }, [])

    return (
        <div>
            <label>
                Name:
                <input 
                    type="text"
                    ref={setFocus}
                />
            </label>
            <label>
                Text:
                <input type="text" />
            </label>
            <label>
                Rating:
                <input type="number" />
            </label>
        </div>
    );
}