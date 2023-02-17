import MenuCategory from './Category'
import { ICategory } from '../../types/types'

const Menu = ({ data }: { data: ICategory[] }) => {
  return (
    <div className="grid h-full w-2/3 gap-8 border-r-2 pr-8">
      {data.length !== 0 ? (
        data.map((category: ICategory) => (
          <MenuCategory key={category._id} category={category}></MenuCategory>
        ))
      ) : (
        <div>loading</div>
      )}
    </div>
  )
}

export default Menu
