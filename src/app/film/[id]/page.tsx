import SlowComponent from "@/app/components/SlowComponent"
import Loading from "./loading"
import { Suspense } from "react"
import Link from "next/link"

export default function FilmPag({ params }: { params: { id: number}}) {
    return (
        <div>
            <Suspense fallback={<Loading />}>
                <SlowComponent />
            </Suspense>
            Film{params.id}
            <Link href="/">Main menu</Link>
        </div>
    )
}