const SpongeBob = function(ctx) {
  this.ctx = ctx;
  this.pos = [Math.floor(Math.random()*800), Math.floor(Math.random()*400)];
  this.img = new Image();
  this.img.src = '/assets/character.svg';
  this.img.onload = this.draw.bind(this);
};

SpongeBob.prototype.draw = function() {
  this.ctx.drawImage(this.img, this.pos[0], this.pos[1], 40, 40);
}

export default SpongeBob;