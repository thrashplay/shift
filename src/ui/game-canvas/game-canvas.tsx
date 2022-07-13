import * as PIXI from 'pixi.js'
import { useCallback, useRef } from 'react'

import './game-canvas.css'

export const GameCanvas = () => {
  const appRef = useRef<PIXI.Application | null>(null)

  const initializePixiApp = useCallback((container: HTMLDivElement) => {
    const app = new PIXI.Application({
      backgroundColor: 0x000066,
      resizeTo: container,
    })

    // Add app to DOM
    container.appendChild(app.view)
    app.start()

    appRef.current = app
  }, [])

  const canvasRefCallback = useCallback((container: HTMLDivElement) => {
    if (container === null) {
      // destroy any pre-existing Pixi app
      if (appRef.current !== null) {
        appRef.current.destroy(true)
        appRef.current = null
      }
    } else {
      // if our ref is set, initialize the app
      initializePixiApp(container)
    }
  }, [initializePixiApp])

  return (
    <div className="canvas" ref={canvasRefCallback} />
  )
}
