import { useEffect, useRef, useState } from 'react'

import {
  IOrderData,
  IOrderDetailsProps,
  IPosition,
  IOrderPrompt,
} from '../../types/types'

import OrderDetailsForm from './Form'
import OrderDetailsOrderedPosition from './OrderedPosition'
import OrderDetailsFormPrompt from './FormPrompt'
import { useNavigate } from 'react-router-dom'
import addOrder from '../../api/addOrder'

const getTotalPrice = (array: IPosition[]) => {
  const prices: number[] = array.map((item) => item.price)
  let price: string | number = prices.reduce((total, cur) => (total += cur), 0)
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

const OrderDetails = ({ selected = [] }: IOrderDetailsProps) => {
  const adressStreetRef = useRef<HTMLInputElement>(null)
  const adressCityRef = useRef<HTMLInputElement>(null)
  const adressHouseNumberRef = useRef<HTMLInputElement>(null)
  const adressPostalCodeRef = useRef<HTMLInputElement>(null)

  const formData = useRef<IOrderData>(null!)
  const [orderPrompt, setOrderPrompt] = useState<IOrderPrompt>(null!)

  const navigate = useNavigate()

  const redirectToOrderCompletePage = async () => {
    setTimeout(
      () => navigate('/order-complete', { state: { data: formData.current } }),
      1000
    )
  }

  useEffect(() => {
    if (orderPrompt?.valid) {
      addOrder(formData.current!)
      redirectToOrderCompletePage()
    }
  }, [orderPrompt])

  useEffect(() => {
    if (orderPrompt?.type === 'position') setOrderPrompt(null!)
  }, [selected])

  const handleChange = () => {
    console.log('change')
    if (orderPrompt && !orderPrompt.valid) {
      setOrderPrompt(null!)
    }
  }

  const validateOrder = (data: IOrderData): IOrderPrompt => {
    const postalCodeRegex = /^[0-9]{2}-[0-9]{3}/

    if (selected.length === 0)
      return {
        valid: false,
        type: 'position',
        message: 'wybierz conajmniej jedno danie!',
      }

    if (!Object.values(data.adress).every((i) => i))
      return {
        valid: false,
        type: 'main',
        message: 'wypełnij wszystkie pola!',
      }

    if (!data.adress.postalCode.match(postalCodeRegex)) {
      console.log(!data.adress.postalCode.match(postalCodeRegex))
      return {
        valid: false,
        type: 'field',
        field: 'postal-code',
        message: 'format kodu pocztowego się nie zgadza',
      }
    }

    return {
      valid: true,
      type: 'main',
      message: 'zamówienie pomyślne',
    }
  }

  const submitOrder = (adress: any) => {
    formData.current = {
      adress: {
        street: adressStreetRef.current!.value,
        city: adressCityRef.current!.value,
        houseNumber: adressHouseNumberRef.current!.value,
        postalCode: adressPostalCodeRef.current!.value,
      },
      selected: selected,
    }

    setOrderPrompt(validateOrder(formData.current))
  }

  return (
    <section className="relative flex h-min w-1/3 flex-col gap-4">
      <OrderDetailsForm
        handleChange={handleChange}
        field={orderPrompt?.field || ''}
        innerRefs={{
          adressStreetRef,
          adressCityRef,
          adressHouseNumberRef,
          adressPostalCodeRef,
        }}
      ></OrderDetailsForm>

      <div className="flex h-8 items-center justify-between">
        <div className="h-1 w-[160px] min-w-max border-b-2 "></div>
        <p className="w-max text-xl font-bold leading-none">Wybrane pozycje</p>
        <div className="h-1 w-[160px] min-w-max border-b-2 "></div>
      </div>

      <div className="flex h-max w-full flex-col items-center gap-y-4">
        {selected.length > 0 ? (
          selected.map((position: IPosition, idx: number) => (
            <OrderDetailsOrderedPosition
              key={idx}
              idx={idx + 1}
              position={position}
            ></OrderDetailsOrderedPosition>
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

      {orderPrompt ? (
        <OrderDetailsFormPrompt
          valid={orderPrompt.valid}
          message={orderPrompt.message}
        ></OrderDetailsFormPrompt>
      ) : (
        <button
          type="submit"
          onClick={submitOrder}
          className="nav-hoverable col-span-full h-16 w-full rounded-lg bg-yellow-500 duration-150 hover:bg-yellow-600"
        >
          ZAMOW
        </button>
      )}
    </section>
  )
}

export default OrderDetails
