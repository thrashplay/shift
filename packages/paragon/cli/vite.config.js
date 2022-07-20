import { builtinModules } from 'module'
import path from 'path'

const PACKAGE_ROOT = __dirname

/**
 * @type {import('vite').UserConfig}
 * @see https://vitejs.dev/config/
 */
const config = {
  build: {
    sourcemap: 'inline',
    ssr: true,
    target: 'node16',
    minify: process.env.MODE !== 'development',
    lib: {
      entry: path.resolve(__dirname, 'src', 'index.ts'),
      formats: ['cjs', 'es'],
    },
    emptyOutDir: true,
  },
  envDir: process.cwd(),
  mode: process.env.MODE,
  rollupOptions: {
    external: builtinModules,
  },
  root: PACKAGE_ROOT,
}

export default config
