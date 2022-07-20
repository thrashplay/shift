import { GameObjectScript } from './game-object-script'

/** Resolves a scritp name into a script object. Returns null if the script name cannot be resolved. */
export type ScriptResolver = (name: string) => GameObjectScript | null
