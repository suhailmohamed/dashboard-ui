import React from 'react'

export interface IconProps {
    className: string
}

export const IconProducts = ({
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
                d="M17.08 10.833c.691 0 1.25.56 1.25 1.25v5c0 .69-.559 1.25-1.25 1.25h-5c-.69 0-1.25-.56-1.25-1.25v-5c0-.69.56-1.25 1.25-1.25h5Zm-9.163 0c.69 0 1.25.56 1.25 1.25v5c0 .69-.56 1.25-1.25 1.25h-5c-.69 0-1.25-.56-1.25-1.25v-5c0-.69.56-1.25 1.25-1.25h5Zm8.997 1.417h-4.667v4.666h4.667V12.25Zm-9.164 0H3.083v4.666H7.75V12.25Zm.167-10.584c.69 0 1.25.56 1.25 1.25v5c0 .69-.56 1.25-1.25 1.25h-5c-.69 0-1.25-.56-1.25-1.25v-5c0-.69.56-1.25 1.25-1.25h5Zm9.164 0c.69 0 1.25.56 1.25 1.25v5c0 .69-.56 1.25-1.25 1.25h-5c-.69 0-1.25-.56-1.25-1.25v-5c0-.69.56-1.25 1.25-1.25h5ZM7.75 3.083H3.083V7.75H7.75V3.083Zm9.164 0h-4.667V7.75h4.667V3.083Z"
                fill="currentColor"
            />
        </svg>
    )
}