import React from 'react';

export default ({ height = 24, ...properties }) => {
    return (
        <svg
            height={height}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            {...properties}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
            />
        </svg>
    );
};
