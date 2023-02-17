import React, { useEffect, useRef, useState } from 'react'

const Cursor = ({ ready }: any) => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [content, setContent] = useState<string>('')

  const moveListenerRef = useRef<any>()
  const onNav = useRef<boolean>(false)
  const posXOffset = useRef<number | null>(null)
  const posYOffset = useRef<number | null>(null)
  const [sizeOffset, setSizeOffset] = useState<number>(7)

  const mouseEnter = () => {
    cursorRef.current!.style.height = '32px'
    cursorRef.current!.style.width = '32px'

    setSizeOffset(15)
  }

  const mouseLeave = () => {
    cursorRef.current!.style.height = '16px'
    cursorRef.current!.style.width = '16px'
    cursorRef.current!.style.opacity = '1'

    setSizeOffset(7)
    setContent('')
  }

  const mouseEnterInput = (e: Event) => {
    cursorRef.current!.style.height = '48px'
    cursorRef.current!.style.width = '48px'

    setSizeOffset(24)
    setContent('wpisz dane!')
  }

  const mouseEnterNav = () => {
    cursorRef.current!.style.opacity = '0'
    cursorRef.current!.style.height = '4rem'
    cursorRef.current!.style.width = '4rem'

    setSizeOffset(32)
  }

  const onMouseMove = (e: any) => {
    if (!onNav.current) cursorRef.current!.style.opacity = '1'

    const { clientX, clientY } = e
    posXOffset.current = clientX
    posYOffset.current = clientY

    cursorRef.current!.style.left = `${clientX}px`
    cursorRef.current!.style.top = `${posYOffset.current!}px`
  }

  const initElementTransitions = () => {
    document.querySelectorAll('.hoverable').forEach((el) => {
      console.log('hoverable')
      el.addEventListener('mouseenter', mouseEnter)
      el.addEventListener('mouseleave', mouseLeave)
    })

    document.querySelectorAll('input').forEach((el) => {
      console.log('input')
      el.addEventListener('mouseenter', mouseEnterInput)
      el.addEventListener('mouseleave', mouseLeave)
    })

    document.querySelectorAll('.nav-hoverable').forEach((el) => {
      el.addEventListener('mouseenter', () => {
        mouseEnterNav()
        onNav.current = true
      })
      el.addEventListener('mouseleave', () => {
        mouseLeave()
        onNav.current = false
      })
    })
  }

  useEffect(() => {
    console.log('cursor init')
    initElementTransitions()

    const main = document.getElementById('root')
    moveListenerRef.current = main?.addEventListener('mousemove', onMouseMove)

    return () => {
      if (moveListenerRef.current)
        main!.removeEventListener('mousemove', onMouseMove)
    }
  }, [ready])

  return (
    <div
      id="cursor"
      ref={cursorRef}
      style={{
        transform: `translate(${-sizeOffset}px, ${-sizeOffset}px)`,
        transitionProperty: 'width, height, transform, opacity',
      }}
      className="pointer-events-none absolute z-50 h-4 w-4 overflow-hidden rounded-full border-2 border-yellow-900 opacity-0  duration-300"
    >
      {content}
    </div>
  )
}

export default Cursor

// if (Scrollbar.has(main!)) {
//   const mainScrollbar = Scrollbar.get(main!)
//   console.log(mainScrollbar)

//   mainScrollbar!.addListener(({ offset }) => {
//     scrollYOffset.current = offset.y
//     console.log(posYOffset, scrollYOffset, posXOffset)

//     cursorRef.current!.style.transform = `translate3d(${-sizeOffset}, ${-sizeOffset}, 0)`
//     cursorRef.current!.style.top = `${posYOffset.current!}px`
//     cursorRef.current!.style.transform = `translate3D(${posXOffset}, ${
//       posYOffset.current! + scrollYOffset.current!
//     }, 0}`
//   })
// }
