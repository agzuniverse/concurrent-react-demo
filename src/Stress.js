import React, { useState, useDeferredValue } from 'react';
import SlowList from "./SlowList";

const Stress = () => {
    const [count, setCount] = useState(0);
    const deferredCount = useDeferredValue(count, {
        timeoutMs: 3000
    });

    const inputChangeHandler = (e) => {
        setCount(e.target.value.length * 100);
    }

    return (
        <div>
            <input hint="Enter something to generate 10 components per letter" onChange={(e) => { inputChangeHandler(e) }}></input>
            <br />
            <SlowList count={deferredCount} />
        </div>
    )
}

export default Stress;