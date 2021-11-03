import Phaser from "phaser";

let monsterSpawn;

class Time_Event extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'Time_Event'
        });
    }

    preload() {
    }

    create() {
        monsterSpawn=this.time.addEvent({
            delay:1000,
            callback: function(){
                //Logic
            },
            callbackScope:this
        })
    }

    update(delta, time) {
    }
}
export default Time_Event;
