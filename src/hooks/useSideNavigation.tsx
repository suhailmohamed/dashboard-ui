
import type { ComponentProps } from 'react'
import { Sidebar } from '../components/sidebar/Sidebar'
import { IconHome } from '../components/icons/IconHome'
import { IconOrder } from '../components/icons/IconOrder'
import { IconProducts } from '../components/icons/IconProducts'
import { IconDelivery } from '../components/icons/IconDelivery'
import { IconMarketing } from '../components/icons/IconMarketing'
import { IconAnalytics } from '../components/icons/IconAnalytics'
import { IconPayouts } from '../components/icons/IconPayouts'
import { IconDiscounts } from '../components/icons/IconDiscounts'
import { IconAudience } from '../components/icons/IconAudience'
import { IconAppearance } from '../components/icons/IconAppearance'
import { IconPlugins } from '../components/icons/IconPlugins'

export const useSideNavigation = (): ComponentProps<
  typeof Sidebar
>['navigation'] => {

  const links: ComponentProps<typeof Sidebar>['navigation'] = [
    { name: 'Home', href: '#', icon: <IconHome className="h-5 w-5 shrink-0" />, current: false },
    { name: 'Orders', href: '#', icon: <IconOrder className="h-5 w-5 shrink-0 " />, current: false },
    { name: 'Products', href: '#', icon: <IconProducts className="h-5 w-5 shrink-0" />, current: false },
    { name: 'Delivery', href: '#', icon: <IconDelivery className="h-5 w-5 shrink-0" />, current: false },
    { name: 'Marketing', href: '#', icon: <IconMarketing className="h-5 w-5 shrink-0" />, current: false },
    { name: 'Analytics', href: '#', icon: <IconAnalytics className="h-5 w-5 shrink-0" />, current: false },
    { name: 'Payouts', href: '#', icon: <IconPayouts className="h-5 w-5 shrink-0" />, current: true },
    { name: 'Discounts', href: '#', icon: <IconDiscounts className="h-5 w-5 shrink-0" />, current: false },
    { name: 'Audience', href: '#', icon: <IconAudience className="h-5 w-5 shrink-0" />, current: false },
    { name: 'Appearance', href: '#', icon: <IconAppearance className="h-5 w-5 shrink-0" />, current: false },
    { name: 'Plugins', href: '#', icon: <IconPlugins className="h-5 w-5 shrink-0" />, current: false },
  ]

  return links
}
