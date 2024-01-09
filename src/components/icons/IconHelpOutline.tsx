import React from 'react'

export interface IconProps {
    className: string
}

export const IconHelpOutline = ({
    className = ''
}: IconProps): React.ReactElement => {
    return (
        <svg
            viewBox="0 0 14 14"
            fill="none"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7.778 10.18a.778.778 0 1 1-1.556 0 .778.778 0 0 1 1.556 0ZM6.127 3.408a2.281 2.281 0 1 1 1.34 4.34v.1a.467.467 0 1 1-.934 0v-.519A.467.467 0 0 1 7 6.863a1.348 1.348 0 1 0-1.348-1.348.467.467 0 1 1-.933 0 2.281 2.281 0 0 1 1.408-2.107Z"
                fill="currentColor"
            />
            <path
                d="M7 1.633a5.367 5.367 0 1 0 0 10.734A5.367 5.367 0 0 0 7 1.633ZM.7 7a6.3 6.3 0 1 1 12.6 0A6.3 6.3 0 0 1 .7 7Z"
                fill="currentColor"
            />
        </svg>
    )
}