import { Script } from '@thrashplay/paragon'

@Script('Foo')
export class FooScript {
  public onAttach (): void {
    console.log('Attached "Foo" script.')
  }
}
