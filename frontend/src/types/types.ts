export interface IPosition {
  _id: number
  name: string
  desc: string
  price: number
  isSelected: boolean
}

export interface ICategory {
  _id: number
  name: string
  positions: IPosition[]
}

export interface IOrderFormProps {
  selected: IPosition[]
  setSelected: React.Dispatch<React.SetStateAction<IPosition[]>>
}

export interface IMenuPositionProps {
  position: IPosition
}

export type TSetSelectedContext = [
  React.Dispatch<React.SetStateAction<IPosition[]>>,
  () => void
]
export interface ISetSelectedProviderProps {
  value: [React.Dispatch<React.SetStateAction<IPosition[]>>, () => void]
  children: React.ReactNode
}

export interface IProgressBar {
  opacity: number
  progress: number
}

export interface IOrderFormInputProps {
  name: string
  placeholder: string
}

export interface IOrderedPositionProps {
  idx: number
  position: IPosition
}
