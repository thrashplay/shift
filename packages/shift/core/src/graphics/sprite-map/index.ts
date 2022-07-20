import * as PIXI from 'pixi.js'

/** function able to provide a texture given the (x, y) coordinate of a tile */
export type TileTextureProvider = (x: number, y: number) => PIXI.Texture

export type SpriteMapOptions = Readonly<{
  /** number of columns */
  columns: number

  /** function able to provide a texture given the (x, y) coordinate of a tile */
  getTexture?: TileTextureProvider

  /** number of rows */
  rows: number

  /** height of each tile */
  tileHeight: number

  /** width of each tile */
  tileWidth: number
}>

export class SpriteMap extends PIXI.Container {
  private _sprites: PIXI.Sprite[][]

  constructor (
    {
      columns,
      getTexture,
      rows,
      tileHeight,
      tileWidth,
    }: SpriteMapOptions,
    public readonly id = 'sprite_map'
  ) {
    super()

    this._sprites = [] as PIXI.Sprite[][]

    for (let y = 0; y < rows; y++) {
      this._sprites[y] = []

      for (let x = 0; x < columns; x++) {
        const sprite = PIXI.Sprite.from(PIXI.Texture.EMPTY)
        this._sprites[y][x] = sprite

        sprite.x = x * tileWidth
        sprite.y = y * tileHeight
        sprite.width = tileWidth
        sprite.height = tileHeight
        this.addChild(sprite)
      }
    }
  }

  public setTexture (x: number, y: number, texture: PIXI.Texture) {
    this._sprites[y][x].texture = texture
  }
}
