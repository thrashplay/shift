import log from '../log'
import { GameObjectScript, ScriptConfiguration } from '../scripting'

import { Engine } from './engine'

export class Scene {
  // set of all game object scripts registered in this scene
  private _scripts: Record<string, ScriptConfiguration[]> = {}

  // state of objects in this scene
  private _state: Record<string, GameObjectScript> = {}

  constructor (
    private _engine: Engine
  ) { }

  /**
   * Adds a game object to the Scene. This means the GameObject will be updated when the scene updates.
   */
  public addGameObject (id: string, scripts: ScriptConfiguration[]) {
    if (this._scripts[id] !== undefined) {
      throw new Error(`GameObject already added: ${id}`)
    }

    this._scripts[id] = scripts
    this._state[id] = {}

    log.info('`ssdaWOOT`', scripts)
    scripts.forEach((configuration) => {
      const script = this._engine.resolveScript(configuration.name)
      log.info('da scr:', script)
      script.onAttach?.({}, {})
    })

    // gameObject.components.forEach((component) => {
    //   todo: just emit an 'add display object' event instead of getting the stage directly
    //   if (component instanceof PIXI.DisplayObject) {
    //     this._engine.pixi.stage.addChild(component)
    //   }
    // })

    // this._objects.push(gameObject)
  }
}
