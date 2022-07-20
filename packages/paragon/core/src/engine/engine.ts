import * as PIXI from 'pixi.js'

import { resolveScriptFromDecorators, ScriptResolver } from '../scripting'

import { Scene } from './scene'

/** Options used to initialize the Paragon engine */
export interface EngineOptions {
  /** Resolver used to convert script names into script objects. Defaults to resolveScriptFromDecorators. */
  scriptResolver?: ScriptResolver
}

export class Engine {
  /** currently active game scene */
  private _scene: Scene

  /** converts script names into script objects */
  private _scriptResolver: ScriptResolver

  /** PIXI application instance */
  private _pixi: PIXI.Application | null = null

  /**
   * Initializes the game engine, and adds it's view canvas to the specified container.
   */
  constructor (
    container: HTMLElement,
    options: EngineOptions = {}
  ) {
    this._scriptResolver = options.scriptResolver ?? resolveScriptFromDecorators

    this._pixi = new PIXI.Application({
      backgroundColor: 0x000066,
      resizeTo: container,
    })

    // Add app to DOM
    container.appendChild(this.pixi.view)
    this.pixi.start()

    // TODO: for now, we only support single-scene games so just instantiate one
    this._scene = new Scene(this)
  }

  /**
  * Destroys the game engine, cleaning up its resources and removing the canvas from the DOM.
  */
  public destroy () {
    // https://pixijs.download/dev/docs/PIXI.Application.html#destroy
    this.pixi.destroy(true, true)
    this._pixi = null
  }

  public resolveScript (name: string) {
    console.log('Yes! resolve script:', name)
    const script = this._scriptResolver(name)
    console.log('ggg', script)
    if (script === null) {
      throw new Error(`Could not resolve script: ${name}`)
    }

    return script
  }

  /**
   * Retrieves the Pixi application instance. Will throw an error if it has been destroyed.
   */
  public get pixi (): PIXI.Application {
    if (this._pixi === null) {
      throw new Error('Engine has been destroyed!')
    }

    return this._pixi
  }

  /**
   * Retrieves the active game scene.
   */
  public get scene (): Scene {
    return this._scene
  }
}
