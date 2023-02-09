import { useContext, useRef, useState } from 'react'
import { setSelectedContext } from '../contexts/setSelected'
import Scrollbar from 'smooth-scrollbar'

import { IProgressBar, IMenuPositionProps } from '../types/types'

const MenuPosition = ({ position }: IMenuPositionProps) => {
  const [setSelected, scrolltoTop] = useContext(setSelectedContext)
  const intervalRef = useRef<any>(null)
  // const progressBarRef = useRef<IProgressBar>({
  //   opacity: 0,
  //   progress: 0,
  // })
  const [progressBar, setProgressBar] = useState<IProgressBar>({
    opacity: 0,
    progress: 0,
  })

  const addOrderPosition = () => {
    console.log(`adding: ${position}`)
    scrolltoTop()
    setSelected((prevSelected) => [...prevSelected, position])
  }

  const startHold = () => {
    console.log('starthold')
    if (intervalRef.current) return
    if (progressBar.opacity === 0)
      setProgressBar((prev) => ({ ...prev, opacity: 50 }))

    let prevProgress = progressBar.progress
    intervalRef.current = setInterval(() => {
      prevProgress += 5
      if (prevProgress > 100) {
        prevProgress = 0
        stopHold()
        addOrderPosition()
      }

      setProgressBar((prev) => ({ ...prev, progress: prevProgress }))
    }, 50)
  }

  const stopHold = () => {
    console.log('stophold')
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null

      // progressBarRef.current = {
      //   opacity: 0,
      //   progress: 0,
      // }
      setProgressBar({ opacity: 0, progress: 0 })
    }
  }

  return (
    <div
      className="group relative flex h-24 items-center rounded-xl px-4 py-2 duration-300 hover:bg-gray-200"
      // onClick={unhideProgressBar}
      onMouseUp={stopHold}
      onMouseDown={startHold}
      onMouseLeave={stopHold}
    >
      <p className="w-8 text-base">{position._id}.</p>
      <div className="w-1/2">
        <h1 className="w-max text-lg font-semibold">{position.name}</h1>
        <p className="text-sm">{position.desc}</p>
      </div>
      <div className="flex w-1/2 flex-col">
        <p className="self-end text-lg">{position.price} zl</p>
        <p className="self-end text-xs font-bold opacity-0 duration-150 group-hover:opacity-100">
          przytrzymaj, aby dodać pozycję do zamówienia
        </p>
      </div>
      <div
        className="absolute left-0 h-full w-full opacity-0"
        style={{
          // opacity: `${progressBarRef.current.opacity}%`,
          opacity: `${progressBar.opacity}%`,
        }}
      >
        <div
          style={{
            width: `${progressBar.progress}%`,
            // width: '10%',
          }}
          className="h-full bg-white duration-100"
        ></div>
      </div>
    </div>
  )
}

export default MenuPosition
