// DATA TYPES

import { MutableRefObject, RefObject } from 'react'

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

export type TSetSelectedContext = [
  React.Dispatch<React.SetStateAction<IPosition[]>>,
  () => void
]

export interface IProgressBar {
  opacity: number
  progress: number
}

export interface IOrderData {
  adress: {
    street: string
    city: string
    houseNumber: string
    postalCode: string
  }
  selected: IPosition[]
}

type PromptType = 'main' | 'field' | 'position'

export interface IOrderPrompt {
  valid: boolean
  type: PromptType
  field?: string
  message: string
}

// PROP TYPES

export interface IFormPromptProps {
  valid: boolean
  message: string
}

export interface IOrderDetailsProps {
  selected: IPosition[]
  orderData: React.Ref<IOrderData>
}

export interface IOrderDetailsFormProps {
  handleChange: () => void
  field: string
  innerRefs: {
    adressStreetRef: RefObject<HTMLInputElement>
    adressCityRef: RefObject<HTMLInputElement>
    adressHouseNumberRef: RefObject<HTMLInputElement>
    adressPostalCodeRef: RefObject<HTMLInputElement>
  }
}

export interface IMenuPositionProps {
  position: IPosition
}

export interface ISetSelectedProviderProps {
  value: [React.Dispatch<React.SetStateAction<IPosition[]>>, () => void]
  children: React.ReactNode
}

export interface IOrderFormInputProps {
  innerRef: React.Ref<HTMLInputElement> | any
  name: string
  placeholder: string
  valid?: string
  onChangeFunction: () => void
}

export interface IOrderedPositionProps {
  idx: number
  position: IPosition
}

type TFetchMenuAction = 'redirect' | 'stay'

// RESPONSES
export interface IFetchMenuResponse {
  success: boolean
  action: TFetchMenuAction
  menu: ICategory[]
}
