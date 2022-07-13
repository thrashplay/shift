import React from 'react'
import { createRoot } from 'react-dom/client'

import { loadFonts } from './fonts/load'
import { App } from './ui/app'

import './renderer.css'

loadFonts().then(() => {
  const container = document.getElementById('root')

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const root = createRoot(container!)
  root.render((
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ))
})
