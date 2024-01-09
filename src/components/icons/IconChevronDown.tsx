import React from 'react'

export interface IconProps {
    className: string
}

export const IconChevronDown = ({
    className = ''
}: IconProps): React.ReactElement => {
    return (
        <svg
            viewBox="0 0 20 20"
            fill="none"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M2.847 7.222a1.184 1.184 0 0 1 1.542-.115l.133.115L10 12.7l5.478-5.478a1.184 1.184 0 0 1 1.542-.115l.133.115c.42.42.459 1.078.115 1.542l-.115.133-6.316 6.315c-.42.42-1.078.459-1.542.115l-.132-.115-6.316-6.315a1.184 1.184 0 0 1 0-1.675Z" />
        </svg>
    )
}