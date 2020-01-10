import React, { memo } from 'react';

const DataDisplay = ({ data }) => {
    return (
        <h3>{data.read().foo}</h3>
    )
}

export default memo(DataDisplay);