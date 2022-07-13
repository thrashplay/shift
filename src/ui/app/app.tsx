import { GameCanvas } from '../game-canvas'

// Top-level app component. Should not provide any visual impact, but only exists
// to structure lower-level app components, provide state, etc.
export const App = () => (
  <>
    <GameCanvas />
  </>
)
