import React from 'react'

export interface IconProps {
    className: string
}

export const IconAnalytics = ({
    className = ''
}: IconProps): React.ReactElement => {
    return (
        <svg
            viewBox="0 0 20 20"
            fill="none"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M2.663 10.938c0-.428.347-.775.775-.775h4.375a.775.775 0 0 1 0 1.55h-3.6v4.85a.775.775 0 0 1-1.55 0v-5.625Z" fill="currentColor" />
            <path d="M1.413 16.563c0-.428.347-.775.775-.775h15.625a.775.775 0 0 1 0 1.55H2.188a.775.775 0 0 1-.775-.775Z" fill="currentColor" />
            <path d="M7.038 7.188c0-.428.347-.775.775-.775h4.375a.775.775 0 0 1 0 1.55h-3.6v8.6a.775.775 0 0 1-1.55 0V7.188Z" fill="currentColor" />
            <path d="M11.413 3.438c0-.428.347-.775.775-.775h4.375c.428 0 .775.347.775.775v13.125a.775.775 0 0 1-.775.775h-4.375a.775.775 0 0 1-.775-.775V3.438Zm1.55.775v11.575h2.825V4.213h-2.825Z" fill="currentColor" />
        </svg>
    )
}