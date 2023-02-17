interface IPosition {
	_id: number
	name: string
	desc: string
	price: number
	isSelected: boolean
}

type TOrderStatus = 'received' | 'production' | 'completed'

export interface IOrder {
	adress: {
		street: string
		city: string
		houseNumber: string
		postalCode: string
	}
	selected: IPosition[]
	status: TOrderStatus
}
