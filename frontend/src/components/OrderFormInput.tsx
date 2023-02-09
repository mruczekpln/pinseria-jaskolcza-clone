import { IOrderFormInputProps } from '../types/types'

const OrderFormInput = ({ name, placeholder }: IOrderFormInputProps) => {
  return (
    <input
      type="text"
      name={name}
      id={name}
      placeholder={placeholder}
      className="border-t-2 pl-4 outline-none duration-75 placeholder:text-sm hover:border-t-4 hover:border-yellow-600"
    />
  )
}

export default OrderFormInput
