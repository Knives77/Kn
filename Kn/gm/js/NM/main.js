import { sub, retry, lives } from "./modules/modulo1.js";
import  Sprite  from "./modules/modulo2.js";

new p5(function (p5) {
    let spritesheet;
    let spritedata;
    let tema;
    let animations = [];
    let ravens = [];


    if (lives > 0) {
        document.getElementById("d").disabled = true;
    }

    document.getElementById("c").onclick = function subir() {
        return sub();
    }

    document.getElementById("d").onclick = function denuevo() {
        return retry();
    }

    p5.preload = function () {
        spritedata = p5.loadJSON("img/image.json");
        spritesheet = p5.loadImage("img/image.png");
    }

    p5.setup = function () {
        const canvas = p5.createCanvas(800, 180 /*div.clientHeight*/);
        canvas.parent("#cont");
        let frames = spritedata.frames;
        for (let i = 0; i < frames.length; i++) {
            let pos = frames[i].position;
            let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
            animations.push(img);
        }

        for (let i = 0; i < 1; i++) {
            ravens[i] = new Sprite(animations, 0, i * 75, 0.4 /*random(0.1, 0.4)*/);
        }
    }

    p5.draw = function () {
        p5.background(0);
        for (let raven of ravens) {
            raven.show(p5);
            raven.animate(p5);
        }
        p5.fill("white")
        p5.textSize(40);
        p5.text("Vidas: " + lives, 320, 70);
    }
});

