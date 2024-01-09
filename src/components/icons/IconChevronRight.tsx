import React from 'react'

export interface IconProps {
    className: string
}

export const IconChevronRight = ({
    className = ''
}: IconProps): React.ReactElement => {
    return (
        <svg
            viewBox="0 0 25 24"
            fill="none"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                clipRule="evenodd"
                d="M8.626 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.92 12 8.626 6.707a1 1 0 0 1 0-1.414Z"
                fill="currentColor"
            />
        </svg>
    )
}