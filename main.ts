namespace SpriteKind {
    export const player2 = SpriteKind.create()
}
let JOKER = sprites.create(assets.image`JOKER PLAYER1`, SpriteKind.Player)
JOKER.setPosition(20, 93)
controller.moveSprite(JOKER, 40, 0)
let batman = sprites.create(assets.image`batman player2`, SpriteKind.player2)
batman.setPosition(140, 93)
controller.player2.moveSprite(batman, 40, 0)
batman = sprites.createProjectileFromSprite(assets.image`murcielago proyectil`, batman, -100, 0)
scene.setBackgroundImage(assets.image`background1`)
