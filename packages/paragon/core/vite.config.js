import path from 'path'

const PACKAGE_ROOT = __dirname
const directoryName = path.basename(PACKAGE_ROOT)

/**
 * @type {import('vite').UserConfig}
 * @see https://vitejs.dev/config/
 */
const config = {
  build: {
    sourcemap: 'inline',
    target: 'node16',
    minify: process.env.MODE !== 'development',
    lib: {
      entry: path.resolve(__dirname, 'src', 'index.ts'),
      name: `paragon_${directoryName}`,
    },
    emptyOutDir: true,
  },
  envDir: process.cwd(),
  mode: process.env.MODE,
  root: PACKAGE_ROOT,
}

export default config
