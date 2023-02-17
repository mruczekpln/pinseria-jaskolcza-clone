import { useContext } from 'react'
import { setSelectedContext } from '../../context/setSelected'
import { IOrderedPositionProps } from '../../types/types'

const OrderDetailsOrderedPosition = ({
  idx,
  position,
}: IOrderedPositionProps) => {
  const [setSelected, _] = useContext(setSelectedContext)

  const deleteThisPosition = () => {
    console.log(`deleting at ${idx - 1}`)
    setSelected((prev) => prev.filter((position, i) => i !== idx - 1))
  }

  return (
    <div className="flex w-full justify-between" key={idx}>
      <div className="flex h-24 w-full items-center rounded-xl bg-gray-200 p-4">
        <p className="w-1/4">{idx}</p>
        <p className="text-xl font-bold">{position.name}</p>
        <p className="ml-auto">{position.price}zł</p>
      </div>
      <div className="my-auto flex h-full w-1/3 justify-center">
        <button
          className="cursor-none border-b-2 border-yellow-900 border-opacity-0 duration-700 hover:border-opacity-100"
          onClick={deleteThisPosition}
        >
          usun
        </button>
      </div>
    </div>
  )
}

export default OrderDetailsOrderedPosition
