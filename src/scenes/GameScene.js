import Phaser from "phaser";

let background;
let player;
let cursors;
let walkLeft;
let walkRight;
let walkUp;
let walkDown;
let standDown;
let standUp;

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.spritesheet('player','src/image/playerBoy.png',{
            frameWidth:15, frameHeight:21
        });
        this.load.image('background','src/image/debug-grid-1920x1920.png');
    }

    create() {
        this.add.tileSprite(0, 0, 1920, 1920, 'background').setOrigin(0,0);
        this.cameras.main.setBounds(0,0,1920,1920);
        player=this.physics.add.sprite(400,300,'player').setScale(2);
        cursors=this.input.keyboard.createCursorKeys();
        this.cameras.main.startFollow(player);

        walkLeft=this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('player',{
                start: 6,
                end: 8
            }),
            frameRate:10,
            repeat:-1
        });

        walkUp=this.anims.create({
            key: 'Up',
            frames: this.anims.generateFrameNumbers('player',{
                start: 4,
                end: 5
            }),
            frameRate:10,
            repeat:-1
        });

        walkDown=this.anims.create({
            key: 'Down',
            frames: this.anims.generateFrameNumbers('player',{
                start: 2,
                end: 3
            }),
            frameRate:10,
            repeat:-1
        });

        standDown=this.anims.create({
            key: 'turnDown',
            frames: [ { key: 'player', frame: 0 } ],
            frameRate: 20
        });
    }

    update(delta, time) {
        if(cursors.up.isDown){
            player.setVelocityY(-300)
            player.anims.play('Up',true);
        }
        else if(cursors.down.isDown){
            player.setVelocityY(300);
            player.anims.play('Down',true);
        }
        else{
            player.setVelocityY(0);
            player.anims.play('turnDown',true);
        }
        if (cursors.left.isDown){
            player.setVelocityX(-300);
        }
        else if (cursors.right.isDown){
            player.setVelocityX(300);
        }
        else{
            player.setVelocityX(0);
        }
    }
}
export default GameScene;
