import React from 'react';

const renderComponent = (ComponentOrNode, properties) => {
    if (!ComponentOrNode) return;

    if (typeof ComponentOrNode === 'function') {
        return <ComponentOrNode {...properties} />;
    }

    return ComponentOrNode;
};

export default renderComponent;
