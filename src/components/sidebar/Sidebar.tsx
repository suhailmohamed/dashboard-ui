import { FC, Fragment, ReactNode } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
    XMarkIcon
} from '@heroicons/react/24/outline'
import { SidebarComponent } from './SidebarComponent'

export interface NavigationProps {
    name: string
    href: string
    icon?: ReactNode
    current: boolean
}

export interface SidebarProps {
    openSidebar: boolean
    onCloseSidebar: () => unknown
    navigation: NavigationProps[]
}

export const Sidebar: FC<SidebarProps> = ({
    openSidebar = false,
    onCloseSidebar,
    navigation
}: SidebarProps) => {
    return (
        <>
            {/* Sidebar for mobile starts here */}
            <Transition.Root show={openSidebar} as={Fragment}>
                <Dialog as="div" className="relative z-50 lg:hidden" onClose={() => onCloseSidebar}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-900/80" />
                    </Transition.Child>

                    <div className="fixed inset-0 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                                        <button
                                            type="button"
                                            className="-m-2.5 p-2.5"
                                            onClick={onCloseSidebar}
                                        >
                                            <span className="sr-only">Close sidebar</span>
                                            <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </button>
                                    </div>
                                </Transition.Child>

                                <SidebarComponent navigation={navigation} />
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
            {/* Sidebar for mobile ends here */}

            {/* Sidebar for desktop starts here */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-56">
                <SidebarComponent navigation={navigation} />
            </div>
            {/* Sidebar for desktop ends here */}
        </>
    )
}