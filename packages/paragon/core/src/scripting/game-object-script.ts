import { GameObjectState } from './game-object-state'

export type GameObjectScriptParameters = Record<string, unknown>

/**
 * Interface for GameObjectScript instances, which define all of the lifecycle callbacks that
 * user scripts can implement.
 */
export type GameObjectScript<
  TState extends GameObjectState = GameObjectState,
  TParameters extends GameObjectScriptParameters = GameObjectScriptParameters
> = {
  // invoked when the script is attached to a game object
  onAttach? (state: TState, params: TParameters): void

  // invoked when the engine updates the game object
  onUpdate? (state: TState, params: TParameters): void
}
