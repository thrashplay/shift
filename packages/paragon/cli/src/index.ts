/* eslint-disable @typescript-eslint/no-var-requires */

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

import build from './commands/build'
import serve from './commands/serve'

yargs(hideBin(process.argv))
  .command(build)
  .command(serve)
  .demandCommand()
  .parse()
