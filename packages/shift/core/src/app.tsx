import { useEffect, useState } from 'react'

import { loadFonts } from './fonts/load'
import GameCanvas from './ui/game-canvas'

// Top-level app component. Should not provide any visual impact, but only exists
// to structure lower-level app components, provide state, etc.
const App = () => {
  const [ready, setReady] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const handle = setTimeout(() => {
      setCount(count + 1)
    }, 1000)

    return () => {
      clearTimeout(handle)
    }
  }, [count, setCount])

  useEffect(() => {
    loadFonts().then(() => {
      setReady(true)
    })
  }, [setReady])

  return ready ? (
    <>
      {/*
      temporary title does not belong here, but was inserted just
      to test non-Pixi components in same layout as canvas
    */}
      <h1>Game App [{count}]</h1>
      <GameCanvas />
    </>
  ) : <div>Loading...</div>
}

export default App
