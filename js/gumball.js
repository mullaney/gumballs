const RADIUS_DEFAULT = 36;
const DAMPENING_EFFECT = .80;
const colors = [
  '#FF0000',
  '#00FF00',
  '#0000FF'
];
const gravity = {
  x: 0,
  y: 0.25
};

function Gumball(x, y, radius, color) {
  this.radius = radius || RADIUS_DEFAULT;
  this.x = x || random(this.radius, width-this.radius);
  this.y = y || (0 - this.radius);
  this.color = color || colors[floor(random(colors.length))];
  this.velocity = createVector(random(-3, 3), 0);

  this.show = function () {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  }

  this.move = function () {
    this.x += this.velocity.x;
    this.velocity.x += gravity.x;
    this.y += this.velocity.y;
    this.velocity.y += gravity.y;
  }

  this.wallCollide = function () {
    if (this.x - this.radius < 0) {
      this.velocity.x = -(this.velocity.x * DAMPENING_EFFECT);
      this.x = 0 + this.radius;
    } else if (this.x + this.radius > width) {
      this.velocity.x = -(this.velocity.x * DAMPENING_EFFECT);
      this.x = width - this.radius;
    } else if (this.y + this.radius > height) {
      this.velocity.y = -(this.velocity.y * DAMPENING_EFFECT);
      if (this.y + this.radius > height) {
        this.y = height - this.radius;
      }
      if (this.velocity.y > -1.6) {
        this.velocity.y = 0;
      }
    }
  }

  this.offscreen = function () {
    if (this.y - this.radius > height) return true;
    if (this.x - this.raidus > width) return true;
    if (this.x + this.radidus < 0) return true;
    return false;
  }
}
