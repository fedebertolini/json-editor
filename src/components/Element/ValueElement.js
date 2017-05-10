import React from 'react';

const ValueElement = ({ data, path }) => (
    <div>
        {`${path[path.length - 1]} : ${data}`}
    </div>
);

export default ValueElement;
