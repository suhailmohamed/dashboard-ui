import React from 'react'

export interface IconProps {
    className: string
}

export const IconMarketing = ({
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
                d="M12.107 2.29a1.438 1.438 0 0 1 2.126 1.263v12.894a1.438 1.438 0 0 1-2.126 1.262l-8.06-4.396H2.375A2.062 2.062 0 0 1 .312 11.25v-2.5c0-1.14.924-2.063 2.063-2.063h1.672l8.06-4.396Zm.501 1.579L5.067 7.982v4.036l7.541 4.113V3.87ZM1.938 8.75c0-.242.195-.438.437-.438h1.063v3.376H2.375a.438.438 0 0 1-.438-.438v-2.5Z"
                fill="currentColor"
            />
            <path
                d="M18.639 5.326c.28.35.223.861-.127 1.142l-2.084 1.666a.812.812 0 1 1-1.015-1.268l2.084-1.667a.813.813 0 0 1 1.142.127Zm-3.135 4.694c0-.448.364-.812.813-.812h2.541a.813.813 0 0 1 0 1.625h-2.541a.813.813 0 0 1-.813-.812Zm.924 2.262a.812.812 0 0 0-1.015 1.27l2.084 1.666a.813.813 0 0 0 1.015-1.27l-2.084-1.666Z"
                fill="currentColor"
            />
        </svg>
    )
}