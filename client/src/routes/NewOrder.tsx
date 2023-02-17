import { useState, useEffect, useRef } from 'react'
import Scrollbar from 'smooth-scrollbar'
import type { Scrollbar as BaseScrollbar } from 'smooth-scrollbar/scrollbar'

import fetchMenu from '../api/fetchMenu'

import { IPosition, ICategory, IOrderData } from '../types/types'

import Navbar from '../layout/Navbar'
import Menu from '../components/Menu'
import OrderDetails from '../components/OrderDetails'
import Cursor from '../components/Cursor'
import { SetSelectedProvider } from '../context/setSelected'
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom'

const NewOrder = () => {
  const [cursorReady, setCursorReady]: any = useOutletContext()
  console.log(cursorReady)

  const orderData = useRef<IOrderData>(null)
  const [selected, setSelected] = useState<IPosition[]>([])
  const [menu, setMenu] = useState<ICategory[]>([])
  const scrollbarRef = useRef<BaseScrollbar | null>(null)

  const scrollToTop = () => scrollbarRef.current!.scrollTo(0, 0, 500)

  const navigate = useNavigate()
  // const { state } = useLocation()

  useEffect(() => {
    // setCursorReady(false)

    const main = document.getElementById('root')
    scrollbarRef.current = Scrollbar.init(main!, {
      damping: 0.05,
      thumbMinSize: 10,
      alwaysShowTracks: true,
    })

    fetchMenu().then((data) => {
      console.log(data)
      if (!(data.action === 'stay')) return navigate('/order-complete')
      setMenu(data.menu)
      if (!cursorReady) setCursorReady(true)
    })

    return () => {
      if (Scrollbar) Scrollbar.destroy(document.getElementById('norbi')!)
    }
  }, [])

  return (
    <section className="relative flex h-max min-h-max w-full gap-8 bg-white p-16">
      <SetSelectedProvider value={[setSelected, scrollToTop]}>
        <Menu data={menu}></Menu>
        <OrderDetails selected={selected} orderData={orderData}></OrderDetails>
      </SetSelectedProvider>
    </section>
  )
}

export default NewOrder
