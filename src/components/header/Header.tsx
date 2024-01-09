import { FC, Fragment } from 'react'
import toast from 'react-hot-toast';
import { Bars3Icon } from '@heroicons/react/24/outline'
import { Menu, Transition } from '@headlessui/react'
import { IconHelpOutline } from '../icons/IconHelpOutline'
import { IconSearch } from '../icons/IconSearch'
import { IconAnnouncement } from '../icons/IconAnnouncement'
import { IconCaretDown } from '../icons/IconCaretDown'

export interface HeaderProps {
    openSidebar: () => unknown
    userNavigation: {
        name: string
        href: string
    }[]
}

export const Header: FC<HeaderProps> = ({
    openSidebar,
    userNavigation
}: HeaderProps) => {
    return (
        <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-b-[#D9D9D9] bg-white px-4 sm:gap-x-6 sm:px-6 lg:px-8">
            <button
                type="button"
                className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                onClick={openSidebar}
            >
                <span className="sr-only">Open sidebar</span>
                <Bars3Icon className="h-6 w-6 fill-gray-900" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div className="h-6 w-px bg-gray-900/30 lg:hidden" aria-hidden="true" />


            <div className="flex flex-1 items-center gap-x-4 self-stretch lg:gap-x-6">
                <div className="inline-flex items-center gap-x-4">
                    <h2 className="font-galano text-xl font-medium text-[#1A181E]">Payouts</h2>
                    
                    <a href="#" className="hidden lg:inline-flex items-center gap-x-1.5 text-xs text-[#4D4D4D] hover:text-black font-normal transition-colors">
                        <IconHelpOutline className="w-3.5 h-3.5" />
                        How it works
                    </a>
                </div>

                <div className="absolute left-2/4 transform -translate-x-2/4 lg:w-80 xl:w-[400px] hidden lg:inline-flex rounded-md">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                        <IconSearch className="h-4 w-4 text-[#808080]" aria-hidden="true" />
                    </div>

                    <input
                        type="text"
                        name="search"
                        id="search"
                        className="block w-full h-10 bg-[#F2F2F2] rounded-md border-0 py-1.5 pl-10 pr-4 text-black font-normal ring-0 placeholder:text-[#808080] sm:text-[15px] sm:leading-[22px] focus:outline-none"
                        placeholder="Search features, tutorials, etc."
                    />
                </div>

                <div className="inline-flex items-center gap-x-3 ml-auto">
                    <button
                        type="button"
                        className="w-10 h-10 bg-[#E6E6E6] inline-flex items-center justify-center rounded-full focus:outline-none"
                        onClick={() => toast('Notifications Button Clicked!')}
                    >
                        <span className="sr-only">View notifications</span>
                        <IconAnnouncement className="w-5 h-5 text-[#4D4D4D]" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu
                        as="div"
                        className="relative inline-flex"
                    >
                        <Menu.Button
                            className="inline-flex items-center justify-center w-10 h-10 bg-[#E6E6E6] rounded-full focus:outline-none"
                        >
                            <span className="sr-only">Open user menu</span>
                            <IconCaretDown className="w-5 h-5 fill-[#4D4D4D]" aria-hidden="true" />
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
                            <Menu.Items className="absolute top-full right-0 z-10 mt-1 w-36 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-[#D9D9D9] focus:outline-none">
                                {userNavigation.map((item) => (
                                    <Menu.Item key={item.name}>
                                        {({ active }) => (
                                            <button
                                                type="button"
                                                className={`w-full block px-3 py-1 text-sm leading-6 text-left transition-colors focus:outline-none
                                                    ${active ? 'bg-gray-100 text-gray-900' : ' text-gray-700'}
                                                `}
                                                onClick={() => toast(`${item.name} Button Clicked!`)}
                                            >
                                                {item.name}
                                            </button>
                                        )}
                                    </Menu.Item>
                                ))}
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </header>
    )
}