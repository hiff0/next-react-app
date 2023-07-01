"use client"

import { spawn } from "child_process";
import { useState, useTransition } from "react"

const SlowComponent = () => {
    const timeNow = Date.now();

    while(Date.now() - timeNow < 5 * 1000) {

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

export default function Transition() {
    const [isVisible, setIsVisible] = useState(false);
    const [isPending, startTransition] = useTransition();

    return (
        <div>
            <button onClick={() => startTransition(() => 
                setIsVisible(!isVisible))}>
                {isVisible ? "hide" : "show"}
            </button>
            {isPending && <span>Ждем...</span>}
            {isVisible && <SlowComponent />}
        </div>
    )
}