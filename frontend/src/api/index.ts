import axios from 'axios'

const HOST = 'http://localhost:8080'

const fetchDishes = async () => {
  const { data } = await axios.get(`${HOST}/api/fetchDishes`)

  return data
}

export { fetchDishes }
