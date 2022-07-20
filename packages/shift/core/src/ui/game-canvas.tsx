import * as PIXI from 'pixi.js'
import { useCallback, useRef } from 'react'

import { Engine } from '@thrashplay/paragon'

import { SpriteMap } from '../graphics/sprite-map'

import './game-canvas.css'

const GameCanvas = () => {
  const engineRef = useRef<Engine | null>(null)

  const initializePixiApp = useCallback((container: HTMLDivElement) => {
    const engine = new Engine(container)

    const graphics = new PIXI.Graphics()
    graphics.lineStyle(1, 0x999999)
    graphics.beginFill(0x6600000)
    graphics.drawRect(0, 0, 16, 16)
    graphics.endFill()

    const renderer = engine.pixi.renderer
    const texture = renderer.generateTexture(graphics)

    const spriteMap = new SpriteMap({
      columns: 50,
      rows: 50,
      tileHeight: 16,
      tileWidth: 16,
    })
    engine.scene.addGameObject('sprite_map', [
      {
        name: 'Foo',
      },
    ])
    // engine.scene.add(spriteMap)
    spriteMap.setTexture(2, 2, texture)

    engineRef.current = engine
  }, [])

  const canvasRefCallback = useCallback((container: HTMLDivElement) => {
    if (container === null) {
      // destroy any pre-existing Pixi app
      if (engineRef.current !== null) {
        engineRef.current.destroy()
        engineRef.current = null
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

export default GameCanvas
