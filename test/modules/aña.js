export class Sprite {
  constructor(animation, x, y, speed) {
    this.x = x;
    this.y = y;
    this.animation = animation;
    this.w = this.animation[0].w;
    this.len = this.animation.length;
    this.speed = speed;
    this.index = 0;
  }

  show() {
    let index = floor(this.index) % this.len;
    image(this.animation[index], this.x, this.y);
  }

  animate() {
    this.index += this.speed;
    //this.x += this.speed * 15;

    //if (this.x > width) {
    //  this.x = -this.w;
    //}
  }
}

let lives = 5;
const max = 10;

const random1 = Math.floor(1 + Math.random() * max);
console.log(random1);

let spritesheet;
let spritedata;
let animations = [];
let ravens = [];

function preload() {
  spritedata = loadJSON("./img/image.json");
  spritesheet = loadImage("./img/image.png");
}

function sub() {
  const value = parseInt(document.getElementById("valorInput").value);
  console.log(value);
  if (value < random1) {
    alert("El numero que ingresaste es menor");
    lives--;
    if (lives < 0) {
      document.getElementById("c").disabled = true;
      document.getElementById("d").disabled = false;
    }
  } else if (value > random1) {
    alert("El numero que ingresaste es mayor");
    lives--;
    if (lives == 0) {
      document.getElementById("c").disabled = true;
      document.getElementById("d").disabled = false;
    }
  } else if (value == random1) {
    alert("Le atinaste");
  }
}

if (lives > 0) {
  document.getElementById("d").disabled = true;
}

function retry() {
  lives = 5;
  if (lives > 0) {
    document.getElementById("d").disabled = true;
    document.getElementById("c").disabled = false;
  }
  console.log(lives);
}

function setup() {
  const canvas = createCanvas(800, 800 /*div.clientHeight*/);
  canvas.parent("#cont");
  let frames = spritedata.frames;
  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    animations.push(img);
  }

  for (let i = 0; i < 1; i++) {
    ravens[i] = new Sprite(animations, 0, i * 75, 0.29 /*random(0.1, 0.4)*/);
  }
  //saveFrames('image', 'png', 2, 25);
}

function draw() {
  background(0);
  for (let raven of ravens) {
    raven.show();
    raven.animate();
  }
}
