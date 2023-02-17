import { createContext } from 'react'
import { TSetSelectedContext, ISetSelectedProviderProps } from '../types/types'

const setSelectedContext = createContext<TSetSelectedContext>(null!)

const SetSelectedProvider = ({
  value,
  children,
}: ISetSelectedProviderProps) => {
  return (
    <setSelectedContext.Provider value={value}>
      {children}
    </setSelectedContext.Provider>
  )
}

export { SetSelectedProvider, setSelectedContext }
