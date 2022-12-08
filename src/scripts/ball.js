export default class Ball {
  constructor(ctx, spd) {
    console.log('initializing ball...');
    this.ctx = ctx;
    this.spd = spd;
    this.pos = [
      200 + Math.floor(Math.random()*200),
      75 + Math.floor(Math.random()*150)
    ];
    const ang = Math.floor(Math.random()*2*Math.PI);
    this.vel = [
      spd*Math.cos(ang),
      spd*Math.sin(ang)
    ];
  }

  animate() {
    this.draw();
    this.update();
  }

  draw() {
    const [x, y] = this.pos;
    this.ctx.beginPath();
    this.ctx.arc(x, y, 5, 0, 2 * Math.PI);
    this.ctx.stroke();
  }

  update() {
    const [x, y] = this.pos;
    const [dx, dy] = this.vel;
    this.pos = [x + dx, y + dy];
    this.collide();
  }

  collide() {
    const [x, y] = this.pos;
    const [dx, dy] = this.vel;
    if (x < 0 || x > 800) {
      this.vel = [-dx, dy];
    }
    if (y < 0 || y > 500) {
      this.vel = [dx, -dy];
    }
  }
};