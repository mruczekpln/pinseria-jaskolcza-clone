import { IFetchMenuResponse } from './../types/types'
import axios from 'axios'
import { SERVER_HOST } from '.'

const fetchMenu = async (): Promise<IFetchMenuResponse> => {
  const { data } = await axios.get(`${SERVER_HOST}/api/fetchMenu`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Credentials': 'true',
    },
    withCredentials: true,
  })

  return data
}

export default fetchMenu
