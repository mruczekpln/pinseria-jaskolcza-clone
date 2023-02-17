import { IFormPromptProps } from '../../types/types'
const OrderDetailsFormPrompt = ({ valid, message }: IFormPromptProps) => {
  const defaultCSS =
    'h-16 w-full rounded-lg grid place-items-center text-lg font-bold'

  return valid ? (
    <div className={`${defaultCSS} bg-lime-600`}>{message}</div>
  ) : (
    <div className={`${defaultCSS} bg-rose-800`}>{message}</div>
  )
}

export default OrderDetailsFormPrompt
