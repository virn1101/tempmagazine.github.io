const canvas = document.getElementById("canvascont");
const ctx = canvas.getContext('2d');
var ww = $(window).width();
var wh = $(window).height();
/*var ww =window.innerWidth;
var wh = window.innerHeight;*/
canvas.width =ww;
canvas.heigth = wh;
let particleArray = [];
const numberOfParticles = 100;
var p = document.getElementById("demo");



window.addEventListener('resize', function(){
  canvas.height = wh;
  canvas.width =  ww;

  init();
});

$( document ).ready(function() {
  canvas.height = wh;
  canvas.width =  ww;

  init();
});

/*
window.onload = function(e){
  canvas.height = wh;
  canvas.width =  ww;

  init();
}
*/
/*
$(window).on('resize',function(){
/*var ww = $(window).width();
var wh = $(window).height();*//*
var ww =window.innerWidth;
var wh = window.innerHeight;
  canvas.width = ww;
  canvas.height= wh;

});

*/

//Mouse Event
const mouse = {
  x: null,
  y:null
}

window.addEventListener(('mousemove'), function(e){
mouse.x = e.x;
mouse.y = e.y;
p.innerHTML= "mousemove "+"x "+mouse.x+"y "+mouse.y;
//console.log("x "+mouse.x+"y "+mouse.y);
//alert("mousemove");
});

window.addEventListener(('touchmove'), function(e){
mouse.x = e.touches[0].clientX;
mouse.y = e.touches[0].clientY;
p.innerHTML= "touchmove "+"x "+mouse.x+"y "+mouse.y;
//console.log("x "+mouse.x+"y "+mouse.y);
//alert("touchmove");
});

setInterval(function(){
mouse.x = undefined;
mouse.y = undefined;
},0);

class Particle{
   constructor(x,y,size,color,weight){
     this.x = x;
     this.y = y;
     this.size = size;
     this.color = color;
     this.weight = weight;
   }

   draw(){
     ctx.beginPath();
     ctx.arc(this.x, this.y, this.size, 0, Math.PI *2, false);
     ctx.fillStyle = this.color;
     ctx.fill();
   //  ctx.strokeStyle="#e2d3ed";
     ctx.shadowColor= "#e2d3ed";
     ctx.shadowBlur=20;
   }

   update(){
     this.size -= 0.5;
     if(this.size <0){
       this.x = (mouse.x + ((Math.random()*20)-10));
       this.y = (mouse.y + ((Math.random()*20)-10));
       this.size = (Math.random() *10)+2;
       this.weight = (Math.random() *2) - 0.5;
     }
     this.y += this.weight;

     if(this.y> canvas.heigth - this.size){
       this.weight *= -1;
     }
   }
}

function init(){
  particleArray = [];

  for(let i=0; i<numberOfParticles;i++){
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.heigth;
    let size = (Math.random() *5)+2;
    let color = '#e2d3ed';
    let weight = 1;
    particleArray.push(new Particle(x,y,size,color,weight));
  }
}

/*function clearCanvas() {
  ctx.clearRect(0, 0, ww, wh);
 }*/

function animate(){
 // ctx.clearRect(0,0, canvas.heigth, canvas.width);
 ctx.clearRect(0, 0, ww, wh);
  for(let i=0; i<particleArray.length; i++){
    particleArray[i].update();
    particleArray[i].draw();
  }
  requestAnimationFrame(animate);
}


init();
animate();



var canvas1 = document.getElementById('canvascontainer');
var ctx1 = canvas1.getContext('2d');


/*var ww = $(window).width();
var wh = $(window).height();*/
/*var ww =window.innerWidth;
var wh = window.innerHeight;*/
canvas1.width = ww;
canvas1.height= wh;
var partCount = 100;
var particles = [];


function particle(){


  this.color = 'rgba(255,255,255,'+ Math.random()+')';
 // console.log(this.color);
  this.x = randomInt(0,ww);
  this.y = randomInt(0,wh);
  this.direction = {
    "x": -1 + Math.random() * 2,
    "y": -1 + Math.random() * 2
  };
  this.vx = 3 * Math.random();
  this.vy = 3 * Math.random();
  this.radius = randomInt(2,3);
  this.float = function(){
    this.x += this.vx * this.direction.x;
    this.y += this.vy * this.direction.y;
  };
  this.changeDirection = function (axis) {
    this.direction[axis] *= -1;
  };
  this.boundaryCheck = function () {
            if (this.x >= ww) {
                this.x = ww;
                this.changeDirection("x");
            } else if (this.x <= 0) {
                this.x = 0;
                this.changeDirection("x");
            }
            if (this.y >= wh) {
                this.y = wh;
                this.changeDirection("y");
            } else if (this.y <= 0) {
                this.y = 0;
                this.changeDirection("y");
            }
        };
  this.draw1 = function () {
    ctx1.beginPath();
    ctx1.fillStyle = this.color;
    ctx1.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx1.fill();
    ctx1.strokeStyle=" #62d5ff";
    ctx1.shadowColor= " #62d5ff";
    ctx1.shadowBlur=10;
  };
}
function clearCanvas() {
 ctx1.clearRect(0, 0, ww, wh);
}
function createParticles(){
  for (i=0;i<partCount;i++){
    var p = new particle();
    particles.push(p);
  }
}
function drawParticles() {
   for (i=0;i<particles.length;i++) {
     p = particles[i];
     p.draw1();
   }
}
function updateParticles() {
        for (var i = particles.length - 1; i >= 0; i--) {
            p = particles[i];
            p.float();
            p.boundaryCheck();
        }
}
createParticles();
drawParticles();
function animateParticles() {
        clearCanvas();
        drawParticles();
        updateParticles();
        requestAnimationFrame(animateParticles);
    }
requestAnimationFrame(animateParticles);

$(window).on('resize',function(){
/*var ww = $(window).width();
var wh = $(window).height();*/
/*var ww =window.innerWidth;
var wh = window.innerHeight;*/
  canvas1.width = ww;
  canvas1.height= wh;
  clearCanvas();
  particles = [];
  createParticles();
  drawParticles();
});
function randomInt(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
function velocityInt(min,max)
{
    return Math.random()*(max-min+1)+min;
}
