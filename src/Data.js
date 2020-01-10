import React, { useState, useTransition, Suspense } from 'react';
import DataDisplay from './DataDisplay';
import { dataFetcher } from './api';

const initialData = { read: () => { return { foo: "initial" } } };

const Data = () => {
    const [data, setData] = useState(initialData);
    const [count, setCount] = useState(0);
    const [startDataTransition, isDataPending] = useTransition({ timeoutMs: 2000 });

    const fetchNewData = () => {
        startDataTransition(() => {
            setData(dataFetcher())
        })
    }

    return (
        <div>
            <Suspense fallback={<p>Loading...</p>}>
                <DataDisplay data={data} />
                <button disabled={isDataPending} onClick={() => fetchNewData()}>Click me to begin data fetch</button>
            </Suspense>
            <p>Counter: {count}</p>
            <button onClick={() => { setCount(count + 1); }}> Click me to check if the app is still responsive</button>
        </div>

    )
}

export default Data;