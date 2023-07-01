"use client"

import dynamic from "next/dynamic"
import { Suspense, lazy, useState} from "react"

const DynamicSlowComponent = dynamic(() =>
    import("@/app/components/SlowComponent/index"),
    {
        ssr: false,
        loading: () => <div>Load...</div>
    }
)

export default function Lazy() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>switch</button>
            {isVisible && <DynamicSlowComponent />}
        </div>
    )
}