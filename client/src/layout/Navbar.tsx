import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [pos, setPos] = useState({})

  useEffect(() => {
    const hoverable = document.querySelectorAll('.nav-hoverable')
    const listeners = []

    hoverable.forEach((el) => {
      listeners.push(
        el.addEventListener('mousemove', (e: any) => {
          setPos({ x: e.clientX, y: e.clientY })
        })
      )
    })
  }, [])

  return (
    <div className="flex h-24 w-full items-center justify-between bg-yellow-500 px-24 font-bold leading-none">
      <div className="aspect-square h-4/5">
        <img
          className="h-full object-cover"
          src="http://pinseriajaskolcza.000webhostapp.com/images/logo.png"
          alt="logo"
        />
      </div>
      <ul className="flex w-1/4 items-center justify-between ">
        <Link
          className="nav-hoverable border-b-2 border-b-white border-opacity-0 duration-700 hover:border-opacity-100"
          state={{ pos: pos }}
          to={'/'}
        >
          MENU
        </Link>
        <a
          className="nav-hoverable border-b-2 border-b-white border-opacity-0 duration-700 hover:border-opacity-100"
          href="#"
        >
          O NAS
        </a>
        <Link
          to={'/order/new'}
          state={{ pos: pos }}
          className="nav-hoverable rounded-md border-2 border-yellow-900 border-opacity-0 bg-yellow-600 p-4 duration-700 hover:border-opacity-100"
        >
          ZAMÓW TERAZ
        </Link>
      </ul>
    </div>
  )
}

export default Navbar
