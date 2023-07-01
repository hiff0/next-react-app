
export default function SlowComponent() {
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