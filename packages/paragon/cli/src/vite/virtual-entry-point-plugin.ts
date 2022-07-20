import { resolve } from 'path'

import { PluginOption } from 'vite'

export interface VirtualEntryPointPluginOptions {
  /** vitejs mode (i.e. development, production, etc); defaults to development */
  mode?: string

  /** project root directory */
  root: string
}

// See: https://vitejs.dev/guide/backend-integration.html
// preamble not needed for prod build, or when non-react
const getEntryPointContent = (mode: string) => {
  const reactPreamble = mode === 'development' ? `<script type="module">
    import RefreshRuntime from 'http://localhost:5173/@react-refresh'
    RefreshRuntime.injectIntoGlobalHook(window)
    window.$RefreshReg$ = () => {}
    window.$RefreshSig$ = () => (type) => type
    window.__vite_plugin_react_preamble_installed__ = true
  </script>` : ''

  return `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      ${reactPreamble}
      <script type="module">
        // import { App } from '/src/index.tsx'
        // console.log('app:', App)
      </script>
      <script type="module" src="src/index.tsx"></script>
      <title>Paragon Application</title>
    </head>
    <body>
      <div id="root" />
    </body>
  </html>`
}

const isEntryPointPath = (root: string, absolutePath: string) => absolutePath === resolve(root, 'index.html')
const isEntryPointUrl = (url: string) => url === '/' || url === 'index.html'

export const virtualEntryPoint = ({
  mode = 'development',
  root,
}: VirtualEntryPointPluginOptions): PluginOption => ({
  name: 'virtual-entry-point',
  configureServer (server) {
    server.middlewares.use((req, res, next) => {
      if (isEntryPointUrl(req.url?.toString() ?? '')) {
        res.end(getEntryPointContent(mode))
      } else {
        next()
      }
    })
  },
  load (id: string) {
    if (isEntryPointPath(root, id)) {
      return getEntryPointContent(mode)
    }

    return null
  },
  resolveId (id: string) {
    if (isEntryPointPath(root, id)) {
      return id
    }

    return null
  },
})
