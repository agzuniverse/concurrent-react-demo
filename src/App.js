import React from 'react';
import Stress from './Stress';
import Data from './Data';

const App = () => {
    return (
        <div>
            <p>React Concurrent Mode testing</p>
            <Stress />
            <Data />
        </div>
    );
}

export default App;