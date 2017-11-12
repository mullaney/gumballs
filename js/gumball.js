const RADIUS_DEFAULT = 36;
const colors = [
  '#FF0000',
  '#00FF00',
  '#0000FF'
];
const gravity = {
  x: 0,
  y: 0.15
};

function Gumball(x, y, radius, color) {
  this.radius = radius || RADIUS_DEFAULT;
  this.x = x || random(this.radius, width-this.radius);
  this.y = y || (0 - this.radius);
  this.color = color || colors[floor(random(colors.length))];
  this.velocity = createVector(0, 0);
  console.log(this);

  this.show = function () {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  }

  this.move = function () {
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.velocity.x += gravity.x;
    this.velocity.y += gravity.y;
  }

  this.offscreen = function () {
    if (this.y - this.radius > height) return true;
    if (this.x - this.raidus > width) return true;
    if (this.x + this.radidus < 0) return true;
    return false;
  }
}
