import { ICategory, IPosition } from '../types/types'
import MenuPosition from './MenuPosition'

const MenuCategory = ({ category }: { category: ICategory }) => {
  return (
    <div className="">
      <h1 className="mb-8 border-b-2 pb-2 text-2xl">{category.name}</h1>
      <div className="flex flex-col gap-4">
        {category.positions.map((position: IPosition) => (
          <MenuPosition key={position._id} position={position}></MenuPosition>
        ))}
      </div>
    </div>
  )
}

export default MenuCategory
