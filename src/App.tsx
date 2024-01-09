import { useState } from 'react'
import { Sidebar } from './components/sidebar/Sidebar'
import { useSideNavigation } from './hooks/useSideNavigation'
import { Header } from './components/header/Header'
import { OverviewStats } from './components/overviewstats/OverviewStats'
import { TransactionDetails } from './components/transactiondetails/TransactionDetails'

const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
]

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const navigation = useSideNavigation()

  return (
    <>
      <Sidebar 
        openSidebar={sidebarOpen}
        onCloseSidebar={() => setSidebarOpen(false)}
        navigation={navigation}
      />

      <div className="lg:pl-56">
        <Header 
          openSidebar={() => setSidebarOpen(true)}
          userNavigation={userNavigation}
        />

        <main className="py-8">
          <div className="px-4 sm:px-6 lg:px-8">
            <OverviewStats  
              stats={[
                { name: 'Next Payout', price: '2,312.23', order: 23, nextPay: 'Today, 04:00PM', current: true },
                { name: 'Amount Pending', price: '92,312.20', order: 13, current: false },
                { name: 'Amount Processed', price: '23,92,312.19', current: false },
              ]}
            />

            <TransactionDetails />
          </div>
        </main>
      </div>
    </>
  )
}

export default App
