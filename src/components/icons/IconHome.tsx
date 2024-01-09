import React from 'react'

export interface IconProps {
    className: string
}

export const IconHome = ({
    className = ''
}: IconProps): React.ReactElement => {
    return (
        <svg
            viewBox="0 0 20 20"
            fill="none"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M16.94 18.75h-3.873a1.329 1.329 0 0 1-1.329-1.32v-5.268h-3.51v5.267a1.329 1.329 0 0 1-1.33 1.321H3.026A1.526 1.526 0 0 1 1.5 17.224v-9.23a1.526 1.526 0 0 1 .615-1.222l7.04-5.217a1.526 1.526 0 0 1 1.829 0l6.9 5.21a1.542 1.542 0 0 1 .573 1.23v9.23a1.517 1.517 0 0 1-1.517 1.525Zm-3.79-1.395h3.806a.131.131 0 0 0 .123-.13v-9.23a.115.115 0 0 0-.049-.099l-6.916-5.21a.14.14 0 0 0-.156 0l-7.03 5.218a.14.14 0 0 0-.058.107v9.213a.131.131 0 0 0 .131.131h3.807v-5.332a1.263 1.263 0 0 1 1.255-1.255h3.815a1.263 1.263 0 0 1 1.272 1.255v5.332Z" fill="currentColor" />
        </svg>
    )
}