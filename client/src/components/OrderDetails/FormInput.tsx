import { useState } from 'react'
import { IOrderFormInputProps } from '../../types/types'

const OrderFormInput = ({
  innerRef,
  name,
  placeholder,
  valid,
  onChangeFunction,
}: IOrderFormInputProps) => {
  const [borderStyle, setBorderStyle] = useState({
    style: 'solid 2px',
    color: '#e5e7eb',
  })

  if (valid === 'postal-code' && borderStyle.color !== 'rgb(159,18,57')
    setBorderStyle({ style: 'solid 6px', color: 'rgb(159,18,57' })

  const handleBorderChange = () => {
    if (innerRef.current !== null) {
      if (innerRef.current.value.length > 0) {
        setBorderStyle({
          style: 'solid 4px',
          color: 'rgb(202,138,4)',
        })
      } else {
        setBorderStyle({
          style: 'solid 6px',
          color: '#e5e7eb',
        })
      }
    }
  }

  return (
    <input
      ref={innerRef}
      type="text"
      name={name}
      id={name}
      placeholder={placeholder}
      className="border-t-2 pl-4 outline-none duration-75 placeholder:text-sm hover:border-t-4 hover:border-yellow-600"
      style={{ borderTop: `${borderStyle.style} ${borderStyle.color}` }}
      onChange={() => {
        onChangeFunction()
        handleBorderChange()
      }}
    />
  )
}

export default OrderFormInput
