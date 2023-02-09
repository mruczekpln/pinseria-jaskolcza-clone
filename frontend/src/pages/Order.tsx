import { useState, useEffect, useRef } from 'react'
import Scrollbar from 'smooth-scrollbar'
import type { Scrollbar as BaseScrollbar } from 'smooth-scrollbar/scrollbar'

import { fetchDishes } from '../api'

import { IPosition, ICategory } from '../types/types'

import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import OrderForm from '../components/OrderForm'
import { SetSelectedProvider } from '../contexts/setSelected'

const OrderPage = () => {
  const [selected, setSelected] = useState<IPosition[]>([])
  const [menu, setMenu] = useState<ICategory[]>([])
  const scrollbar = useRef<BaseScrollbar | null>(null)

  const scrollToTop = () => scrollbar.current?.scrollTo(0, 0, 500)

  useEffect(() => {
    scrollbar.current = Scrollbar.init(document.getElementById('norbi')!, {
      damping: 0.05,
      thumbMinSize: 10,
      alwaysShowTracks: true,
    })

    fetchDishes().then((data) => {
      console.log(data)
      setMenu(data)
    })

    return () => {
      if (Scrollbar) Scrollbar.destroy(document.getElementById('norbi')!)
    }
  }, [])

  return (
    <div className="h-screen w-screen font-unbounded" id="norbi">
      {/* <Scrollbar
        ref={scrollbar}
        plugins-={{ overscroll: { effect: 'bounce' } as const }}
      > */}
      <Navbar></Navbar>
      <section className="relative flex h-max min-h-max w-full gap-8 p-16">
        <SetSelectedProvider value={[setSelected, scrollToTop]}>
          <Menu data={menu}></Menu>
        </SetSelectedProvider>
        <OrderForm selected={selected} setSelected={setSelected}></OrderForm>
      </section>
      {/* </Scrollbar> */}
    </div>
  )
}

export default OrderPage
