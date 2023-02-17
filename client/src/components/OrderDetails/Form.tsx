import { IOrderDetailsFormProps } from '../../types/types'

import OrderFormInput from './FormInput'

const OrderDetailsForm = ({
  handleChange,
  field,
  innerRefs,
}: IOrderDetailsFormProps) => {
  const {
    adressStreetRef,
    adressCityRef,
    adressHouseNumberRef,
    adressPostalCodeRef,
  } = innerRefs

  return (
    <form className="grid h-[200px] w-full grid-cols-2 grid-rows-2 gap-4">
      <OrderFormInput
        innerRef={adressStreetRef}
        name="street"
        placeholder="nazwa ulicy"
        onChangeFunction={handleChange}
      />
      <OrderFormInput
        innerRef={adressCityRef}
        name="city"
        placeholder="miasto"
        onChangeFunction={handleChange}
      />
      <OrderFormInput
        innerRef={adressHouseNumberRef}
        name="house-number"
        placeholder="numer domu (np. 5, 3a/4)"
        onChangeFunction={handleChange}
      ></OrderFormInput>
      <OrderFormInput
        innerRef={adressPostalCodeRef}
        name="postal-code"
        placeholder="kod pocztowy (XX-XXX)"
        valid={field || ''}
        onChangeFunction={handleChange}
      />
    </form>
  )
}

export default OrderDetailsForm
