export const startStars = function(){


var field = document.querySelector(".stars");
var f = field.getContext("2d", { alpha: false });

var stars = {};
var starIndex = 0;
var numStars = 0;
var acceleration = 2;
var starsToDraw = (field.width * field.height) / 50;


function Star() {
    this.X = field.width / 2;
    this.Y = field.height / 2;

    this.SX = Math.random() * 10 - 5;
    this.SY = Math.random() * 10 - 5;

    var start = 0;

    if (field.width > field.height)
        start = field.width;
    else
        start = field.height;

    this.X += this.SX * start / 10;
    this.Y += this.SY * start / 10;

    this.W = 2;
    this.H = 2;

    this.age = 0;
    this.dies = 500;

    starIndex++;
    stars[starIndex] = this;

    this.ID = starIndex;
    this.C = "#ffffff";
}

Star.prototype.Draw = function () {
    this.X += this.SX;
    this.Y += this.SY
    
    this.SX += this.SX / (50 / acceleration);
  	this.SY += this.SY / (50 / acceleration);

    this.age++;

    if (this.age == Math.floor(50 / acceleration) | this.age == Math.floor(150 / acceleration) | this.age == Math.floor(300 / acceleration)) {
        this.W ++;
        this.H ++;
    }

    if (this.X + this.W < 0 | this.X > field.width |
        this.Y + this.H < 0 | this.Y > field.height)
      {
        delete stars[this.ID];
        numStars--;
			}
  
    f.fillStyle = this.C;
    f.fillRect(this.X, this.Y, this.W, this.H);
}

field.width = 3*window.innerWidth;
field.height = 4*window.innerHeight;

function draw() {
  	if (field.width != window.innerWidth)
      	field.width = 3*window.innerWidth;
  	if (field.height != window.innerHeight)
      	field.height = 4*window.innerHeight;
  
  	// Play with the "a" value to create streams...it's fun!
    f.fillStyle = "rgba(0, 0, 0, 0.9)";
    f.fillRect(0, 0, field.width, field.height);

    for (var i = numStars; i < starsToDraw; i++) {
        new Star();
        numStars++;
    }

    for (var star in stars) {
        stars[star].Draw();
    }
}

// Original timing of the screensaver
setInterval(window.requestAnimationFrame, 60, draw);

}