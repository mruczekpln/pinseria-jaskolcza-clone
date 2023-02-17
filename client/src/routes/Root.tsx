import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Cursor from '../components/Cursor'
import Navbar from '../layout/Navbar'

const Root = () => {
  console.log('root rerender')
  const [cursorReady, setCursorReady] = useState<boolean>(false)

  return (
    <div
      className="h-screen w-screen overflow-x-hidden font-unbounded"
      id="root"
    >
      <Navbar></Navbar>
      <Outlet context={[cursorReady, setCursorReady]}></Outlet>
      <Cursor ready={cursorReady}></Cursor>
      {/* {cursorReady && <Cursor ready={cursorReady}></Cursor>} */}
    </div>
  )
}

export default Root
