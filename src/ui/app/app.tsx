import { GameCanvas } from '../game-canvas'

// Top-level app component. Should not provide any visual impact, but only exists
// to structure lower-level app components, provide state, etc.
export const App = () => (
  <>
    {/*
      temporary title does not belong here, but was inserted just
      to test non-Pixi components in same layout as canvas
    */}
    <h1>Game App</h1>
    <GameCanvas />
  </>
)
