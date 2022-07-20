import path from 'path'

import { build } from 'vite'
import { ArgumentsCamelCase, Argv } from 'yargs'

import { PgnCommandModule } from '../command-module'
import { getViteConfig } from '../vite/get-vite-config'

interface BuildOptions {
  /** project root directory */
  path: string
}

class BuildCommand extends PgnCommandModule<BuildOptions> {
  constructor () {
    super('build [path]', 'build the project')
  }

  public handler = async (args: ArgumentsCamelCase<BuildOptions>) => {
    const config = await getViteConfig(args.path, 'build', 'production')
    await build({
      ...config,
      root: args.path,
    })
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

export default new BuildCommand()
