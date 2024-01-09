import React from 'react'

export interface IconProps {
    className: string
}

export const IconPlugins = ({
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
                d="M18.808 7.417A.752.752 0 0 0 18.141 7h-7.05l.775-6.183A.722.722 0 0 0 11.15 0a.742.742 0 0 0-.567.258l-8.75 10.5a.731.731 0 0 0 .558 1.2h7.05l-.775 6.175a.756.756 0 0 0 .434.767c.3.125.65.042.858-.208l8.75-10.5a.746.746 0 0 0 .1-.775Zm-8.383 8.433.566-4.533a.756.756 0 0 0-.175-.575.763.763 0 0 0-.55-.242H3.95l6.158-7.392-.567 4.525a.73.73 0 0 0 .184.575.71.71 0 0 0 .541.25h6.317l-6.158 7.392Z"
                fill="currentColor"
            />
        </svg>
    )
}