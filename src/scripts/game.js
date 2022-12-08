import Paddle from "./paddle";
import Ball from "./ball";

export default class Game {
  constructor(ctx, spd) {
    console.log('initializing game...');
    this.ctx = ctx;
    this.background = new Image();
    this.background.src = './images/background.jpeg';
    this.spd = spd;
    this.ball = new Ball(ctx,spd);
    this.leftPaddle = new Paddle(ctx, 'left');
    this.rightPaddle = new Paddle(ctx, 'right');
    this.background.onload = this.animate.bind(this);
  }

  animate() {
    this.ctx.clearRect(0,0,800,500);
    this.ctx.drawImage(this.background, 0, 0);
    this.ball.animate();
    window.requestAnimationFrame(this.animate.bind(this));
  }
};