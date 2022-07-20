import path from 'path'

import { createServer } from 'vite'
import { ArgumentsCamelCase, Argv } from 'yargs'

import { PgnCommandModule } from '../command-module'
import { getViteConfig } from '../vite/get-vite-config'

interface BuildOptions {
  /** project root directory */
  path: string
}

class ServeCommand extends PgnCommandModule<BuildOptions> {
  constructor () {
    super('serve [path]', 'start the development server')
  }

  public handler = async (args: ArgumentsCamelCase<BuildOptions>) => {
    const config = await getViteConfig(args.path, 'serve', 'development')
    const server = await createServer({
      ...config,
      root: args.path,
    })

    await server.listen()
    server.printUrls()
  }

  public builder = (yargs: Argv): Argv<BuildOptions> => {
    return yargs.positional('path', {
      coerce: path.resolve,
      default: process.cwd(),
      defaultDescription: 'cwd',
      describe: 'project root directory',
      type: 'string',
    })
  }
}

export default new ServeCommand()
