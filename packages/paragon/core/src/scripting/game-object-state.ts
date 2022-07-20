export type SimpleValue = null | string | number | boolean
export type ComplexValue = Record<string, SimpleValue> | SimpleValue[]
export type StateKey = string
export type StateValue = SimpleValue | ComplexValue
export type GameObjectState = Record<StateKey, StateValue>
