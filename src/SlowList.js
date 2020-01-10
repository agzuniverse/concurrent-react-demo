import React, { memo } from 'react';

const SlowList = ({ count }) => {
    const Elems = () => {
        let a = [];
        for (let i = 0; i < count; i++) {
            a.push(<p key={i}>Row number {i}</p>)
        }
        return a;
    }
    return (
        <div>
            <Elems />
        </div>
    )
}

export default memo(SlowList);