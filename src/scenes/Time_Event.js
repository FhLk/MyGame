import Phaser from "phaser";
import { TextureSource } from "phaser/src/textures";

let monsterSpawn;
let objR;
let monsterGroup;
let objS;
let bulletEvent;
let bullet;
let bulletGroup;
let spcaeBar;

class Time_Event extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'Time_Event'
        });
    }

    preload() {
        this.load.image('objR','src/image/Rapid.png');
        this.load.image('objS','src/image/Separate.png');
        this.load.image('bullet','src/image/bullet.png');
    }

    create() {
        objS=this.physics.add.image(700,300,'objS').setImmovable();
        monsterGroup=this.physics.add.group();
        bulletGroup=this.physics.add.group();
        monsterSpawn=this.time.addEvent({
            delay:2000,
            callback: function(){
                objR=this.physics.add.image(400,300,'objR');
                monsterGroup.add(objR);
                objR.setVelocityX(100);
                this.physics.add.collider(objS,objR,(objS,objR)=>{
                    objR.destroy();
                });
            },
            callbackScope:this,
            loop:true,
        });

        spcaeBar=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update(delta, time) {

        if(spcaeBar.isDown){
            bullet=this.physics.add.image(/*player*/.x,/*player*/.y,'bullet').setScale(0.5);
            bulletGroup.add(bullet);
            bullet.setVelocityX(-300);
            this.physics.add.collider(bullet,/*monster*/,(bullet,/*monster*/)=>{
                bullet.destroy();
                /*monster*/.destroy();
            });
        }

        for(let i=0;i<monsterGroup.getChildren().length;i++){
            if(monsterGroup.getChildren()[i].x>700){
                monsterGroup.getChildren()[i].destroy();
            }
        }

        for(let i=0;i<bulletGroup.getChildren().length;i++){
            if(bulletGroup.getChildren()[i].x<100){
                bulletGroup.getChildren()[i].destroy();
            }
        }
    }
}
export default Time_Event;
