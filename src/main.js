import 'phaser';
import Phaser from 'phaser';
import GameScene from './scenes/GameScene';
import Time_Event from './scenes/Time_Event';


const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.CANVAS,
    pixelArt: true,
    roundPixels: true,
    parent: 'content',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: [
        Time_Event
    ],
    
    
};

const game = new Phaser.Game(config);