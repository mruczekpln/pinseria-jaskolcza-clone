import React from 'react'

import { IOrderFormProps, IPosition } from '../types/types'

import OrderFormInput from './OrderFormInput'
import OrderedPosition from './OrderedPosition'

const OrderForm = ({ selected = [], setSelected }: IOrderFormProps) => {
  const getTotalPrice = (array: IPosition[]) => {
    const prices: number[] = array.map((item) => item.price)
    let price: string | number = prices.reduce(
      (total, cur) => (total += cur),
      0
    )
    let priceWithShipping: string | number = price + 12

    if (price % 1 != 0) {
      priceWithShipping = priceWithShipping.toString().concat('0')
      price = price.toString().concat('0')
    } else {
      price = price.toString().concat('.00')
      priceWithShipping = priceWithShipping.toString().concat('.00')
    }

    return { price: price, priceWithShipping: priceWithShipping }
  }

  return (
    <section className="sticky right-0 top-16 flex h-min w-1/3 flex-col gap-4">
      <form className="grid h-[200px] w-full grid-cols-2 grid-rows-2 gap-4">
        <OrderFormInput name="street" placeholder="adres" />
        <OrderFormInput name="city" placeholder="miasto" />
        <OrderFormInput
          name="house-number"
          placeholder="numer domu"
        ></OrderFormInput>
        <OrderFormInput name="flat-number" placeholder="numer mieszkania" />
      </form>

      <div className="flex h-8 items-center justify-between">
        <div className="h-1 w-[160px] min-w-max border-b-2 "></div>
        <p className="w-max text-xl font-bold leading-none">Wybrane pozycje</p>
        <div className="h-1 w-[160px] min-w-max border-b-2 "></div>
      </div>

      <div className="flex w-full flex-col items-center gap-4">
        {selected.length > 0 ? (
          selected.map((position: IPosition, idx: number) => (
            <OrderedPosition
              key={idx}
              idx={idx + 1}
              position={position}
            ></OrderedPosition>
          ))
        ) : (
          <div>nic tu nie ma...</div>
        )}
      </div>

      <div className="flex items-center gap-4">
        {Number(getTotalPrice(selected).price) === 0 ? (
          <>
            <p className="text-lg leading-none">cena: </p>
            <p className="text-2xl leading-none">
              {getTotalPrice(selected).price}
            </p>
            <p className="leading-none">zł</p>
          </>
        ) : (
          <>
            <p className="text-lg leading-none">cena: </p>
            <p className="text-2xl leading-none">
              {getTotalPrice(selected).price}
            </p>
            <p className="text-lg leading-none">+</p>
            <p className="text-2xl leading-none">12</p>
            <p className="text-lg leading-none">+</p>
            <p className="text-2xl leading-none">
              {getTotalPrice(selected).priceWithShipping}
            </p>
            <p className="leading-none">zł</p>
          </>
        )}
      </div>
      <button
        type="submit"
        className="col-span-full h-[50px] w-full rounded-lg bg-yellow-500 duration-150 hover:bg-yellow-600"
      >
        ZAMOW
      </button>
    </section>
  )
}

export default OrderForm
