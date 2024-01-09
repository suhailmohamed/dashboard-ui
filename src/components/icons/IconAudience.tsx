import React from 'react'

export interface IconProps {
    className: string
}

export const IconAudience = ({
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
                d="M14.613 15.25v1.538a.737.737 0 0 1-.738.75.75.75 0 0 1-.75-.75V15.25a2.35 2.35 0 0 0-2.35-2.35H4.587a2.35 2.35 0 0 0-2.337 2.35v1.538a.75.75 0 1 1-1.5 0V15.25a3.837 3.837 0 0 1 3.837-3.838h6.188a3.826 3.826 0 0 1 3.838 3.838ZM7.65 2.125a3.837 3.837 0 1 0 3.838 3.838A3.85 3.85 0 0 0 7.65 2.125Zm0 6.188a2.35 2.35 0 1 1 0-4.7 2.35 2.35 0 0 1 0 4.7Zm11.6 6.937v1.538a.74.74 0 0 1-1.268.53.75.75 0 0 1-.22-.53V15.25A2.337 2.337 0 0 0 16 12.975a.75.75 0 0 1-.537-.912.737.737 0 0 1 .35-.45.65.65 0 0 1 .374-.1.489.489 0 0 1 .188 0 3.825 3.825 0 0 1 2.875 3.737Zm-3.087-9.275a3.838 3.838 0 0 1-2.888 3.75.738.738 0 0 1-.563-.075.762.762 0 0 1-.337-.463.736.736 0 0 1 .075-.562.775.775 0 0 1 .463-.338 2.35 2.35 0 0 0 0-4.55.8.8 0 0 1-.463-.35.725.725 0 0 1-.075-.562.736.736 0 0 1 .9-.538 3.837 3.837 0 0 1 2.888 3.688Z"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="currentColor"
            />
        </svg>
    )
}