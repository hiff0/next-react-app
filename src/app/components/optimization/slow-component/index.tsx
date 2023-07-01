"use client"

// import { Какой-то медленный компонент SlowComponent, который тормозит все}
import { useState } from "react"

// Создаем компонент пониже, чтобы из-за состояния
// не перерендериваляс SlowComponent

const CountComponent = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <button type="button" onClick={() => setCount((curCount) => curCount + 1)}>{count}</button>
        </>
    )
}

export default function StateLocation() {
    
    return (
        <div>
            {/* Вместо button делаем другой компонент 
            <button type="button" onClick={() => setCount((curCount) => curCount + 1)}>{count}</button> */}
            <CountComponent />
            {/*<SlowComponent /> */}
        </div>
    )
}