import { FC, useState } from "react"
import { Tab } from '@headlessui/react'
import { IconSearch } from "../icons/IconSearch"
import { IconSort } from "../icons/IconSort"
import { IconDownload } from "../icons/IconDownload"
import toast from 'react-hot-toast';

export const TransactionDetails: FC = () => {
    const [transactionsData] = useState({
        Payouts: [
            {
                id: 1,
                transactionId: '131634495717',
                href: '#',
                orderId: '#281209',
                status: 'success',
                refundDate: 'Today, 08:45 PM',
                amount: '1,125.00'
            },
            {
                id: 2,
                transactionId: '131634495716',
                href: '#',
                orderId: '#281208',
                status: 'inprogress',
                refundDate: 'Yesterday, 3:00 PM',
                amount: '1,125.00'
            },
            {
                id: 3,
                transactionId: '131634495715',
                href: '#',
                orderId: '#281207',
                status: 'success',
                refundDate: '12 Jul 2023, 03:00 PM',
                amount: '1,125.00'
            },
            {
                id: 4,
                transactionId: '131634495714',
                href: '#',
                orderId: '#281206',
                status: 'success',
                refundDate: '12 Jul 2023, 03:00 PM',
                amount: '1,125.00'
            },
            {
                id: 5,
                transactionId: '131634495713',
                href: '#',
                orderId: '#281205',
                status: 'success',
                refundDate: '12 Jul 2023, 03:00 PM',
                amount: '1,125.00'
            },
            {
                id: 6,
                transactionId: '131634495712',
                href: '#',
                orderId: '#281204',
                status: 'success',
                refundDate: '12 Jul 2023, 03:00 PM',
                amount: '1,125.00'
            },
            {
                id: 7,
                transactionId: '131634495711',
                href: '#',
                orderId: '#281209',
                status: 'success',
                refundDate: 'Today, 08:45 PM',
                amount: '1,125.00'
            },
            {
                id: 8,
                transactionId: '131634495710',
                href: '#',
                orderId: '#281208',
                status: 'inprogress',
                refundDate: 'Yesterday, 3:00 PM',
                amount: '1,125.00'
            },
            {
                id: 9,
                transactionId: '131634495721',
                href: '#',
                orderId: '#281207',
                status: 'success',
                refundDate: '12 Jul 2023, 03:00 PM',
                amount: '1,125.00'
            },
            {
                id: 10,
                transactionId: '131634495722',
                href: '#',
                orderId: '#281206',
                status: 'success',
                refundDate: '12 Jul 2023, 03:00 PM',
                amount: '1,125.00'
            },
            {
                id: 11,
                transactionId: '131634495723',
                href: '#',
                orderId: '#281205',
                status: 'success',
                refundDate: '12 Jul 2023, 03:00 PM',
                amount: '1,125.00'
            },
            {
                id: 6,
                transactionId: '131634495724',
                href: '#',
                orderId: '#281204',
                status: 'success',
                refundDate: '12 Jul 2023, 03:00 PM',
                amount: '1,125.00'
            },
            {
                id: 12,
                transactionId: '131634495725',
                href: '#',
                orderId: '#281209',
                status: 'success',
                refundDate: 'Today, 08:45 PM',
                amount: '1,125.00'
            },
            {
                id: 13,
                transactionId: '131634495726',
                href: '#',
                orderId: '#281208',
                status: 'inprogress',
                refundDate: 'Yesterday, 3:00 PM',
                amount: '1,125.00'
            },
            {
                id: 14,
                transactionId: '131634495727',
                href: '#',
                orderId: '#281207',
                status: 'success',
                refundDate: '12 Jul 2023, 03:00 PM',
                amount: '1,125.00'
            },
            {
                id: 15,
                transactionId: '131634495728',
                href: '#',
                orderId: '#281206',
                status: 'success',
                refundDate: '12 Jul 2023, 03:00 PM',
                amount: '1,125.00'
            },
            {
                id: 16,
                transactionId: '131634495729',
                href: '#',
                orderId: '#281205',
                status: 'success',
                refundDate: '12 Jul 2023, 03:00 PM',
                amount: '1,125.00'
            },
            {
                id: 17,
                transactionId: '131634495730',
                href: '#',
                orderId: '#281204',
                status: 'success',
                refundDate: '12 Jul 2023, 03:00 PM',
                amount: '1,125.00'
            },
            {
                id: 18,
                transactionId: '131634495731',
                href: '#',
                orderId: '#281209',
                status: 'success',
                refundDate: 'Today, 08:45 PM',
                amount: '1,125.00'
            },
            {
                id: 19,
                transactionId: '131634495732',
                href: '#',
                orderId: '#281208',
                status: 'inprogress',
                refundDate: 'Yesterday, 3:00 PM',
                amount: '1,125.00'
            },
            {
                id: 20,
                transactionId: '131634495733',
                href: '#',
                orderId: '#281207',
                status: 'success',
                refundDate: '12 Jul 2023, 03:00 PM',
                amount: '1,125.00'
            },
            {
                id: 21,
                transactionId: '131634495734',
                href: '#',
                orderId: '#281206',
                status: 'success',
                refundDate: '12 Jul 2023, 03:00 PM',
                amount: '1,125.00'
            },
            // More transaction...
        ],
        Refunds: [
            {
                id: 1,
                transactionId: '131634495747',
                href: '#',
                orderId: '#281209',
                status: 'success',
                refundDate: 'Today, 08:45 PM',
                amount: '1,125.00'
            },
            {
                id: 2,
                transactionId: '131634495746',
                href: '#',
                orderId: '#281208',
                status: 'inprogress',
                refundDate: 'Yesterday, 3:00 PM',
                amount: '1,125.00'
            },
            {
                id: 3,
                transactionId: '131634495745',
                href: '#',
                orderId: '#281207',
                status: 'success',
                refundDate: '12 Jul 2023, 03:00 PM',
                amount: '1,125.00'
            },
            {
                id: 4,
                transactionId: '131634495744',
                href: '#',
                orderId: '#281206',
                status: 'success',
                refundDate: '12 Jul 2023, 03:00 PM',
                amount: '1,125.00'
            },
            {
                id: 5,
                transactionId: '131634495743',
                href: '#',
                orderId: '#281205',
                status: 'success',
                refundDate: '12 Jul 2023, 03:00 PM',
                amount: '1,125.00'
            },
            {
                id: 6,
                transactionId: '131634495742',
                href: '#',
                orderId: '#281204',
                status: 'success',
                refundDate: '12 Jul 2023, 03:00 PM',
                amount: '1,125.00'
            },
            // More transaction...
        ]
    })

    return (
        <div>
            <h3 className="text-xl font-medium text-[#1A181E]">Transactions | This Month</h3>

            <Tab.Group defaultIndex={1}>
                <Tab.List className="flex items-center gap-x-3 mt-6">
                    {Object.keys(transactionsData).map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) => {
                                return `px-4 py-1.5 text-sm font-medium rounded-3xl transition-colors ${selected ? ' bg-[#146EB4] text-white' : ' bg-[#E6E6E6] text-[#808080]'} focus:outline-none`
                            } }
                        >
                            {category}{" "}({category === 'Payouts' ? transactionsData.Payouts.length : transactionsData.Refunds.length})
                        </Tab>
                    ))}
                </Tab.List>

                <Tab.Panels>
                    {Object.values(transactionsData).map((transactions, idx) => (
                        <Tab.Panel
                            key={idx}
                            className="focus:outline-none"
                        >
                            <div className="mt-6 px-4 sm:px-6 lg:px-8">
                                <div className="mt-8 flow-root">
                                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div className="inline-block min-w-full align-middle">
                                            <div className="overflow-hidden bg-white sm:rounded-lg sm:shadow-[0px_2px_6px_0px_rgba(26,24,30,0.04)] p-3 pb-2">
                                                <div className="flex items-center">
                                                    <div className="relative w-[248px] hidden md:inline-flex rounded-md">
                                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                                                            <IconSearch className="h-3.5 w-3.5 text-[#999999]" aria-hidden="true" />
                                                        </div>

                                                        <input
                                                            type="text"
                                                            name="search"
                                                            id="search"
                                                            className="block w-full h-10 bg-white rounded border-0 py-1.5 pl-[38px] pr-4 text-black font-normal ring-1 ring-[#D9D9D9] placeholder:text-[#999999] sm:text-sm focus:outline-none focus:ring-indigo-600"
                                                            placeholder="Order ID or transaction ID"
                                                        />
                                                    </div>

                                                    <div className="inline-flex items-center gap-x-4 ml-auto">
                                                        <button
                                                            type="button"
                                                            className="inline-flex items-center justify-center px-3 py-1.5 text-[#4D4D4D] text-base font-normal ring-1 ring-[#D9D9D9] rounded focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-indigo-600"
                                                            onClick={() => toast('Sort Button Clicked!')}
                                                        >
                                                            Sort

                                                            <IconSort className="w-4 h-4 fill-[#4D4D4D] ml-1.5" />
                                                        </button>

                                                        <button
                                                            type="button"
                                                            className="inline-flex items-center justify-center p-2 ring-1 ring-[#D9D9D9] rounded focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-indigo-600"
                                                            onClick={() => toast('Download Button Clicked!')}
                                                        >
                                                            <span className="sr-only">Download Icon</span>
                                                            <IconDownload className="w-5 h-5 fill-[#4D4D4D]" />
                                                        </button>
                                                    </div>
                                                </div>
                                        
                                                <table className="mt-4 min-w-full">
                                                    <thead className="bg-[#F2F2F2]">
                                                        <tr>
                                                            <th scope="col" className="whitespace-nowrap px-3 py-2.5 text-left text-sm font-medium text-[#4D4D4D] rounded-l">
                                                                Order ID
                                                            </th>
                                                            <th scope="col" className="whitespace-nowrap px-3 py-2.5 text-left text-sm font-medium text-[#4D4D4D]">
                                                                Status
                                                            </th>
                                                            <th scope="col" className="whitespace-nowrap px-3 py-2.5 text-left text-sm font-medium text-[#4D4D4D]">
                                                                Transaction ID
                                                            </th>
                                                            <th scope="col" className="whitespace-nowrap px-3 py-2.5 text-left text-sm font-medium text-[#4D4D4D]">
                                                                Refund date
                                                            </th>
                                                            <th scope="col" className="whitespace-nowrap px-3 py-2.5 text-right text-sm font-medium text-[#4D4D4D] rounded-r">
                                                                Order amount
                                                            </th>
                                                        </tr>
                                                    </thead>

                                                    <tbody className="divide-y divide-[#E6E6E6] bg-white">
                                                        {transactions.map((transaction) => (
                                                            <tr key={transaction.transactionId}>
                                                                <td className="whitespace-nowrap px-3 py-3.5 text-sm font-medium">
                                                                    <a href={transaction.href} className="text-[#146EB4]">
                                                                        {transaction.orderId}
                                                                    </a>
                                                                </td>

                                                                <td className="whitespace-nowrap px-3 py-3.5 text-sm">
                                                                    {transaction.status === 'success' && (
                                                                        <span className="inline-flex items-center gap-1.5 text-[#1A181E]">
                                                                            <span className="w-2.5 h-2.5 rounded-full bg-[#17B31B]" />
                                                                            Successful
                                                                        </span>
                                                                    )}

                                                                    {transaction.status === 'inprogress' && (
                                                                        <span className="inline-flex items-center gap-1.5 text-[#1A181E]">
                                                                            <span className="w-2.5 h-2.5 rounded-full bg-[#999999]" />
                                                                            Processing
                                                                        </span>
                                                                    )}
                                                                </td>

                                                                <td className="whitespace-nowrap px-3 py-3.5 text-sm text-[#4D4D4D]">{transaction.transactionId}</td>

                                                                <td className="whitespace-nowrap px-3 py-3.5 text-sm text-[#4D4D4D]">{transaction.refundDate}</td>

                                                                <td className="whitespace-nowrap px-3 py-3.5 text-sm text-[#4D4D4D] text-right ">
                                                                    ₹{transaction.amount}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}