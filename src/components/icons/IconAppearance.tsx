import React from 'react'

export interface IconProps {
    className: string
}

export const IconAppearance = ({
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
                d="M4.875 10.589a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75ZM9 5.464a1.375 1.375 0 1 1-2.75 0 1.375 1.375 0 0 1 2.75 0Zm3.375 1.375a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75ZM16.5 9.214a1.375 1.375 0 1 1-2.75 0 1.375 1.375 0 0 1 2.75 0Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 19.375C4.875 19.375.625 15.125.625 10S4.875.625 10 .625 19.375 4.375 19.375 9c0 3-2.5 5.5-5.5 5.5h-1.75c-.375 0-.75.375-.75.75 0 .25.125.375.25.5.375.375.5.875.5 1.375 0 1.25-1 2.25-2.125 2.25ZM10 2c-4.375 0-8 3.625-8 8s3.625 8 8 8c.375 0 .75-.375.75-.75 0-.25-.125-.375-.25-.5-.375-.375-.5-.875-.5-1.375 0-1.125 1-2.125 2.125-2.125h1.75c2.25 0 4.125-1.875 4.125-4.125C18 5.125 14.375 2 10 2Z"
                fill="currentColor"
            />
        </svg>
    )
}