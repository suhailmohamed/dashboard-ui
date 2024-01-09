import React from 'react'

export interface IconProps {
    className: string
}

export const IconWallet = ({
    className = ''
}: IconProps): React.ReactElement => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 3.797c-.577 0-1.2.558-1.2 1.45v13.5c0 .892.623 1.45 1.2 1.45h18c.577 0 1.2-.558 1.2-1.45v-2.9H17a3.85 3.85 0 1 1 0-7.7h5.2v-2.9c0-.892-.623-1.45-1.2-1.45H3Zm20.8 4.35v-2.9c0-1.593-1.168-3.05-2.8-3.05H3c-1.632 0-2.8 1.457-2.8 3.05v13.5c0 1.594 1.168 3.05 2.8 3.05h18c1.632 0 2.8-1.456 2.8-3.05v-2.9h.05v-7.7h-.05Zm-7.8 3.8c0-.469.38-.85.85-.85h1.3a.85.85 0 0 1 0 1.7h-1.3a.85.85 0 0 1-.85-.85Zm-1.15.05A2.15 2.15 0 0 1 17 9.847h5.15v4.3H17a2.15 2.15 0 0 1-2.15-2.15Z"
            />
        </svg>
    )
}