import { FC, Fragment } from "react"
import toast from 'react-hot-toast';
import { IconHelpOutline } from "../icons/IconHelpOutline"
import { IconChevronRight } from "../icons/IconChevronRight"
import { Menu, Transition } from "@headlessui/react"
import { IconChevronDown } from "../icons/IconChevronDown"

export interface OverviewStatsProps {
    stats: {
        name: string
        price: string
        order?: number
        nextPay?: string
        current?: boolean
    }[]
}

export const OverviewStats: FC<OverviewStatsProps> = ({
    stats
}: OverviewStatsProps) => {
    return (
        <div className="mb-[68px]">
            <div className="flex items-center">
                <h3 className="text-xl font-medium text-[#1A181E]">Overview</h3>

                <div className="ml-auto">
                    <Menu as="div" className="relative inline-block text-left z-10">
                        <div>
                            <Menu.Button 
                                className="inline-flex w-full items-center justify-center gap-1.5 bg-white px-3.5 py-1.5 text-base font-normal text-[#4D4D4D] ring-1 ring-[#D9D9D9] rounded focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-indigo-600"
                            >
                                This Month

                                <IconChevronDown
                                    className="w-4 h-4 fill-[#4D4D4D]"
                                    aria-hidden="true"
                                />
                            </Menu.Button>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 mt-1 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-[#D9D9D9] focus:outline-none">
                                <div className="px-1 py-1 space-y-0.5">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                className={`${ active ? 'bg-indigo-600 text-white' : 'bg-indigo-500 text-white'
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                            >
                                                This Month
                                            </button>
                                        )}
                                    </Menu.Item>

                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                className={`${active ? 'bg-indigo-500 text-white' : 'text-gray-900'
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                            >
                                                This Week
                                            </button>
                                        )}
                                    </Menu.Item>

                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                className={`${active ? 'bg-indigo-500 text-white' : 'text-gray-900'
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                            >
                                                Today
                                            </button>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>

            <dl className="mt-7 grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-3 gap-5 gap-y-5">
                {stats.map((item) => {
                    const showOrderText = item.order! > 0

                    return (
                        <div
                            key={item.name}
                            className={`relative px-4 py-5 sm:p-6 shadow-[0_2px_6px_0px_rgba(26,24,30,0.04)] rounded-lg cursor-pointer transform transition-transform duration-500 translate-x-0 hover:-translate-y-0.5
                                ${item.current ? ' bg-[#146EB4]' : ' bg-white'}
                            `}
                            onClick={() => toast(`${item.name} Clicked!`)}
                        >
                            <dt
                                className={`flex items-center gap-x-1 text-base font-normal  
                                    ${item.current ? ' text-white' : ' text-[#4D4D4D]'}
                                `}
                            >
                                {item.name}

                                <IconHelpOutline className={`w-4 h-4 shrink-0 ${item.current ? ' text-white' : ' text-[#4D4D4D]'}`} />
                            </dt>

                            <dd className="mt-4 flex items-center justify-between">
                                <span
                                    className={`text-[32px] font-medium leading-[38px] 
                                        ${item.current ? ' text-white' : ' text-[#1A181E]'}
                                    `}
                                >
                                    ₹{item.price}
                                </span>

                                {showOrderText && (
                                    <span
                                        className={`inline-flex items-center text-base font-medium underline underline-offset-1
                                            ${item.current ? ' text-white' : ' text-[#146EB4]'}
                                        `}
                                    >
                                        {item.order}{" "}{item.order! > 1 ? 'orders' : 'order'}
                                        <IconChevronRight className="w-6 h-6" />
                                    </span>
                                )}
                            </dd>

                            {item.nextPay && (
                                <dd className="mt-5 -mx-4 -mb-6 sm:-mx-6 sm:-mb-6 xl:m-0 xl:absolute xl:inset-x-0 xl:-bottom-6 flex items-center justify-between px-6 py-2 bg-[#0E4F82] text-sm font-normal text-[#F2F2F2] rounded-lg">
                                    <span>Next payout date:</span>
                                    <span className="font-medium">{item.nextPay}</span>
                                </dd> 
                            )}
                        </div>
                    )
                })}
            </dl>
        </div>
    )
}