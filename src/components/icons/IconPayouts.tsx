import React from 'react'

export interface IconProps {
    className: string
}

export const IconPayouts = ({
    className = ''
}: IconProps): React.ReactElement => {
    return (
        <svg
            viewBox="0 0 20 20"
            fill="none"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.75 13.75H1.477C.661 13.75 0 13.19 0 12.5V3.75C0 3.06.661 2.5 1.477 2.5h13.296c.816 0 1.477.56 1.477 1.25v2.5h2.273c.816 0 1.477.63 1.477 1.406v8.438c0 .776-.661 1.406-1.477 1.406H5.227c-.816 0-1.477-.63-1.477-1.406V13.75ZM5 6a1.5 1.5 0 0 0-1.5 1.5v4.75h-2V4h13.25v2H5Zm6.875 8.375a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                fill="currentColor"
            />
        </svg>
    )
}