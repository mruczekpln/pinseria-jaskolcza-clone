import { IOrderData } from './../types/types'
import { SERVER_HOST } from '.'
import axios from 'axios'

const addOrder = async (orderData: IOrderData) => {
  const res = await axios.post(`${SERVER_HOST}/api/addOrder`, orderData, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Credentials': 'true',
    },
    withCredentials: true,
  })

  console.log(res.data)
}

export default addOrder
