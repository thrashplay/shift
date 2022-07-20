window.addEventListener('DOMContentLoaded', () => {
  for (const dependency of ['chrome', 'node', 'electron']) {
    // eslint-disable-next-line no-console
    console.log(`${dependency} version: ${process.versions[dependency] ?? 'unknown'}`)
  }
})

export {}
