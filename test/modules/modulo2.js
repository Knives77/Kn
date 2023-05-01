export default class Sprite {
  constructor(animation, x, y, speed) {
    this.x = x;
    this.y = y;
    this.animation = animation;
    this.w = this.animation[0].w;   
    this.len = this.animation.length;
    this.speed = speed;
    this.index = 0;
  }

  show(p5) {
    let index = p5.floor(this.index) % this.len;
    p5.image(this.animation[index], this.x, this.y);
  }

  animate(p5) {
    this.index += this.speed;
    //this.x += this.speed * 15;
    //if (this.x > width) {
    //  this.x = -this.w;
    //}
  }
}