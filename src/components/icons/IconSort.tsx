


import React from 'react'

export interface IconProps {
    className: string
}

export const IconSort = ({
    className = ''
}: IconProps): React.ReactElement => {
    return (
        <svg
            viewBox="0 0 16 16"
            fill="none"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M1.623 9.934a.533.533 0 0 1 .754 0l2.264 2.263 2.264-2.263a.533.533 0 0 1 .754.754l-2.641 2.64a.533.533 0 0 1-.754 0l-2.641-2.64a.533.533 0 0 1 0-.754Z" fill="currentColor" />
            <path d="M4.64 2.515c.295 0 .534.239.534.533v9.904a.533.533 0 1 1-1.067 0V3.048c0-.294.24-.533.534-.533Zm9.737 3.551a.533.533 0 0 1-.754 0l-2.264-2.263-2.264 2.263a.533.533 0 0 1-.754-.754l2.641-2.64a.533.533 0 0 1 .754 0l2.641 2.64a.533.533 0 0 1 0 .754Z" fill="currentColor" />
            <path d="M11.36 13.485a.533.533 0 0 1-.534-.533V3.048a.533.533 0 0 1 1.066 0v9.904a.533.533 0 0 1-.533.533Z" fill="currentColor" />
        </svg>
    )
}