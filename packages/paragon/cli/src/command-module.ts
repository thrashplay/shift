import { ArgumentsCamelCase, Argv, CommandModule } from 'yargs'

// https://stackoverflow.com/a/66606826
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyArgs = Partial<Record<string, any>>

export abstract class PgnCommandModule<TArgs extends AnyArgs = AnyArgs> implements CommandModule<AnyArgs, TArgs> {
  constructor (
    public command: string,
    public describe: string
  ) { }

  public abstract builder: (yargs: Argv) => Argv<TArgs>
  public abstract handler: (args: ArgumentsCamelCase<TArgs>) => void
}
