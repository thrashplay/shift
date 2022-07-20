import path, { join } from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig, InlineConfig, loadConfigFromFile, mergeConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import { virtualEntryPoint } from './virtual-entry-point-plugin'

const getDefaultBuildConfig = (root: string, mode: 'development' | 'production') => defineConfig({
  build: {
    emptyOutDir: true,
    minify: mode !== 'development',
    outDir: 'dist',
    sourcemap: 'inline',
    target: 'chrome102',
    rollupOptions: {
      // overwrite default .html entry
      // TODO: https://vitejs.dev/config/build-options.html#build-polyfillmodulepreload
      // input: path.resolve(root, 'src/index.ts'),
    },
  },
  envDir: process.cwd(),
  mode,
  plugins: [
    virtualEntryPoint({ mode, root }),
    react(),
    tsconfigPaths(),
  ],
  root,
})

/**
 * Retrieves a Vite configuration by applying a project-specific Vite config file's contents on top
 * of default Paragon project settings.
 */
export const getViteConfig = async (
  root: string,
  command: 'build' | 'serve',
  mode: 'development' | 'production'
): Promise<InlineConfig> => {
  const defaults = getDefaultBuildConfig(root, mode)
  const custom = await loadConfigFromFile(
    { command, mode },
    undefined,
    root,
    'info'
  )

  // setting `configFile` to false prevents the config from being re-loaded later
  // https://vitejs.dev/guide/api-javascript.html#inlineconfig
  return {
    configFile: false,
    ...mergeConfig(defaults, custom?.config ?? {}),
  }
}
