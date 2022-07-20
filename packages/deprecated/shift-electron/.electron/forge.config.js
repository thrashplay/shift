module.exports = {
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'shift_chronicle',
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: [
        'darwin',
      ],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        categories: ['Game'],
        maintainer: 'Sean Kleinjung',
        productName: 'Shift: Chronicle',
      },
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {
        categories: ['Game'],
        productName: 'Shift: Chronicle',
      },
    },
  ],
  packagerConfig: {},
  plugins: [
    ['@electron-forge/plugin-webpack', {
      devContentSecurityPolicy: `default-src 'self' 'unsafe-inline' data:; script-src 'self' 'unsafe-eval' 'unsafe-inline' data:`,
      mainConfig: './.electron/webpack.main.config.js',
      renderer: {
        config: './.electron/webpack.renderer.config.js',
        entryPoints: [{
          html: './src/html/index.html',
          js: './src/renderer/index.tsx',
          name: 'main_window',
          preload: {
            js: './src/renderer/preload.ts',
          },
        }],
      },
    }],
  ],
}
