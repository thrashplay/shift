import { GameObjectScriptParameters } from './game-object-script'

export interface ScriptConfiguration<TParameters extends GameObjectScriptParameters = GameObjectScriptParameters> {
  // name of the referenced script
  name: string

  // parameters that will be supplied to the script's handlers when they are invoked
  parameters?: TParameters
}

// console.log('big req', __webpack_public_path__)
// const requireScript = require.context('..', true, /\.[jt]s?$/)
// requireScript.keys().forEach((s) => {
//   console.log('s:', s)
//   requireScript(s)
// })
