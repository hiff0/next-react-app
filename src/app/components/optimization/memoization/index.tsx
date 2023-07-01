"use client"

// Мемоизацию использовать в родительском компоненте,
// когда нужно остановить цепочку перерендеров в дочерних
const SlowComponent = () => {
    const timeNow = performance.now();

    while(timeNow - performance.now() > 2) {

    }

    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </div>
    )
}

// import { Какой-то медленный компонент SlowComponent, который тормозит все}
import React, { useState } from "react"


export default function Memoization() {
    const [count, setCount] = useState(0);
    return (
        <div> 
            <button type="button" onClick={() => setCount((curCount) => curCount + 1)}>{count}</button>
            {/* <CountComponent /> */}
            {/*<SlowComponent /> 
            используем мемоизированный компонент*/}
            <MemoizedSlowComponent />
        </div>
    )
}

const MemoizedSlowComponent = React.memo(SlowComponent);