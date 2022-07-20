import { forEach, keys } from 'lodash/fp'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { log } from '@thrashplay/paragon'

import App from './app'

import './index.css'

const container = document.getElementById('root')

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!)
root.render((
  <StrictMode>
    <App />
  </StrictMode>
))

const modules = import.meta.glob('./**/*.[jt]s(x|)', { eager: true })
forEach((moduleName) => {
  log.debug(`Scanning module: ${moduleName}`)
}, keys(modules))

export { App }
