import logo from './../../assets/logo.png'
import { FC, Fragment, ReactNode } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { IconChevronDown } from '../icons/IconChevronDown'
import { IconWallet } from '../icons/IconWallet'

export interface NavigationProps {
    name: string
    href: string
    icon?: ReactNode
    current: boolean
}

export interface SidebarComponentProps {
    navigation: NavigationProps[]
}

export const SidebarComponent: FC<SidebarComponentProps> = ({
    navigation
}: SidebarComponentProps) => {
    return (
        <div className="flex grow flex-col gap-y-6 overflow-y-auto bg-[#1E2640] pt-4 px-2.5 pb-4">
            <div className="flex shrink-0 -my-1.5">
                <Menu
                    as="div"
                    className="relative w-full"
                >
                    {({ open }) => {
                        return (
                            <>
                                <Menu.Button
                                    className={`w-full flex items-center px-2 py-1.5 gap-x-3 rounded focus:outline-none
                                                ${open ? ' bg-white/10 ' : ' hover:bg-white/10 '}
                                            `}
                                >
                                    <img
                                        className="h-10 w-auto rounded"
                                        src={logo}
                                        alt="logo"
                                    />

                                    <div className="min-w-0 flex flex-1 flex-col items-start gap-y-1">
                                        <p className="text-white text-[15px] font-medium leading-[22px] truncate">Nishyan</p>
                                        <a href='#' className="text-white/80 text-[13px] leading-4 font-normal underline underline-offset-1">Visit store</a>
                                    </div>

                                    <IconChevronDown className={`w-5 h-5 fill-white transform transition-transform ${open ? ' -scale-100' : ''}`} />
                                </Menu.Button>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-10 mt-1 w-full origin-top-right rounded bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    type="button"
                                                    className={`w-full flex gap-x-3 px-2 py-1 text-[15px] font-medium leading-[22px] focus:outline-none 
                                                        ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}
                                                    `}
                                                >
                                                    <span className="w-10 h-10 bg-gray-200 rounded animate-pulse" />
                                                    Lorem 1
                                                </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    type="button"
                                                    className={`w-full flex gap-x-3 px-2 py-1 text-[15px] font-medium leading-[22px] focus:outline-none 
                                                        ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}
                                                    `}
                                                >
                                                    <span className="w-10 h-10 bg-gray-200 rounded animate-pulse" />
                                                    Lorem 2
                                                </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    type="button"
                                                    className={`w-full flex gap-x-3 px-2 py-1 text-[15px] font-medium leading-[22px] focus:outline-none 
                                                        ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}
                                                    `}
                                                >
                                                    <span className="w-10 h-10 bg-gray-200 rounded animate-pulse" />
                                                    Lorem 3
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </>
                        )
                    }}
                </Menu>
            </div>

            <nav className="flex flex-1">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                        <ul role="list" className="space-y-1">
                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className={`group flex gap-x-3 rounded-sm py-2 px-4 text-sm font-medium transition-colors
                                                    ${item.current ? ' bg-white/10 text-white' : ' hover:bg-white/10 text-white opacity-80'}
                                                `}
                                    >
                                        {item.icon}
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </li>

                    <li className="mt-auto">
                        <button
                            type="button"
                            className="group bg-[#353C53] w-full flex items-center gap-x-3 rounded px-3 py-1.5"
                        >
                            <span className="bg-white/10 w-9 h-9 shrink-0 inline-flex items-center justify-center rounded">
                                <IconWallet className="w-6 h-6 fill-white" />
                            </span>

                            <div className="min-w-0 flex flex-col flex-grow gap-y-0.5 text-left">
                                <p className="text-white/80 text-[13px] leading-4 font-normal">Available credits</p>
                                <p className="text-white text-base font-medium">222.10</p>
                            </div>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}