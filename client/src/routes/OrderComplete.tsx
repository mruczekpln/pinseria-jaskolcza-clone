import { useLocation } from 'react-router-dom'
import Navbar from '../layout/Navbar'
import Cursor from '../components/Cursor'

const OrderCompletePage = () => {
  const { state } = useLocation()
  console.log(state)

  return (
    <div className="h-screen w-screen font-unbounded" id="main">
      <Navbar></Navbar>

      <section className="flex h-full w-full flex-col items-center justify-around gap-4 bg-white">
        <h1 className="text-2xl">Jedzonko zaraz u ciebie będzie :)</h1>
        <p>id zamówienia: 123123123</p>
        <div>
          <h2>dane twojego zamowienia</h2>
        </div>
      </section>

      <Cursor></Cursor>
    </div>
  )
}

export default OrderCompletePage
