import log from '../log'

import { GameObjectScript } from './game-object-script'
import { ScriptResolver } from './script-resolver'

type ScriptConstructor = new () => GameObjectScript
const scripts: Record<string, GameObjectScript> = {}

/**
 * Decorates a GameObjectScript class, so it is registered with the engine.
 *
 * The decorated class MUST be compatible with the GameObjectScript and SHOULD NOT have any
 * instance members. (A single instance of this class will be used to provide functionality to
 * all game objects that use it.)
 *
 * @param scriptName optional name to register the script under; defaults to the class name
 */
export const Script = (scriptName?: string) => <TScript extends ScriptConstructor>(script: TScript) => {
  log.info('Registered script:', scriptName ?? script.name)

  // eslint-disable-next-line new-cap
  scripts[scriptName ?? script.name] = new script()
  return script
}

export const resolveScriptFromDecorators: ScriptResolver = (name: string) => scripts[name] ?? null
