import { IOrderedPositionProps } from '../types/types'

const OrderedPosition = ({ idx, position }: IOrderedPositionProps) => {
  return (
    <div
      key={idx}
      className="flex h-24 w-[90%] items-center rounded-xl bg-gray-200 p-8"
    >
      <p className="w-1/4">{idx}</p>
      <p className="text-xl font-bold">{position.name}</p>
      <p className="ml-auto">{position.price}zł</p>
    </div>
  )
}

export default OrderedPosition
