import { useEffect } from 'react'
import { useLocation, useOutletContext } from 'react-router-dom'

const Landing = () => {
  const [cursorReady, setCursorReady]: any = useOutletContext()
  const { state } = useLocation()
  console.log(state)

  useEffect(() => setCursorReady(false), [])

  return (
    <section className="flex h-max w-screen items-center justify-center overflow-hidden bg-white">
      <h1 className="text-4xl font-bold">Landing Page!</h1>
    </section>
  )
}

export default Landing
