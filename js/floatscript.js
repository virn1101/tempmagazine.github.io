
var isMobile = {
  Android: function() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  iPhone: function() {
        return navigator.userAgent.match(/iPhone/i);
    },
  iPad: function() {
        return navigator.userAgent.match(/iPad/i);
    },
  Opera: function() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};

var canvas = document.getElementById('canvascontainer');
var ctx = canvas.getContext('2d');


var ww = $(window).width();
var wh = $(window).height();
canvas.width = ww;
canvas.height= wh;
var partCount = 100;
var particles = [];


function particle(){


  this.color = 'rgba(255,255,255,'+ Math.random()+')';
  console.log(this.color);
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
  this.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.strokeStyle=" #62d5ff";
    ctx.shadowColor= " #62d5ff";
    ctx.shadowBlur=10;
  };
}
function clearCanvas() {
 ctx.clearRect(0, 0, ww, wh);
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
     p.draw();
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
  ww = $(window).width();
  wh = $(window).height();
  canvas.width = ww;
  canvas.height= wh;
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



/*Mouse Trail*/
var canvas1 = document.getElementById('canvascont');
canvas1.height = $(window).height();
canvas1.width =  $(window).width();
c = canvas1.getContext('2d');

window.addEventListener('resize', function(){
    canvas1.height = $(window).height();
    canvas1.width =  $(window).width();

    initCanvas();
})

var mouse = {
    x: undefined,
    y: undefined
}
window.addEventListener('mousemove',
    function (event) {
        mouse.x = event.x;
        mouse.y = event.y;
        drawCircles();
    }
)
window.addEventListener("touchmove", 
    function (event) {
        let touch = event.touches[0];
        mouse.x = touch.clientX;
        mouse.y = touch.clientY;
        drawCircles();
    }
)

function Circle(x, y, radius, vx, vy, rgb, opacity, birth, life){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.minRadius = radius;
    this.vx = vx;
    this.vy = vy;
    this.birth = birth;
    this.life = life;
    this.opacity = opacity;

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, Math.PI * 2, false);
        c.fillStyle = 'rgba(' + rgb +','+ this.opacity +')';
        c.fill();
        c.strokeStyle="#e2d3ed";
        c.shadowColor= "#e2d3ed";
        c.shadowBlur=40;
    }

    this.update = function(){
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.vx = -this.vx;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.vy = -this.vy;
        }

        this.x += this.vx;
        this.y += this.vy;

        this.opacity = 1- (((frame - this.birth) * 1) / this.life);

        if (frame > this.birth + this.life){
            for (let i = 0; i < circleArray.length; i++){
                if (this.birth == circleArray[i].birth && this.life == circleArray[i].life){
                    circleArray.splice(i, 1);
                    break;
                }
            }
        } else{
            this.draw();
        }
    }

}

var circleArray = [];

function initCanvas() {
    circleArray = [];
}

var colorArray = [
    '228, 240, 189'
]

function drawCircles(){
    for (let i = 0; i < 6; i++) {
        let radius = Math.floor(Math.random() * 10) + 2;
        let vx = (Math.random() * 2) - 1;
        let vy = (Math.random() * 2) - 1;
        let spawnFrame = frame;
        let rgb = colorArray[Math.floor(Math.random() * colorArray.length)];


        let life = 100;

        circleArray.push(new Circle(mouse.x, mouse.y, radius, vx, vy, rgb, 1, spawnFrame, life));

    }
}

var frame = 0;
function animate() {
    requestAnimationFrame(animate);



    frame += 10;
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < circleArray.length; i++ ){
        circleArray[i].update();
    }
    
}

initCanvas();
animate();
/*
// This is just for demo purposes :
for (let i = 1; i < 110; i++) {
    (function (index) {
        setTimeout(function () { 
            mouse.x = 100 + i * 10;
            mouse.y = 100;
            drawCircles();
         }, i * 10);
    })(i);
}*/




/*
document.addEventListener("mousemove", function(e) {
  let body = document.querySelector("body");
  let circle1 = document.createElement("span");
  let circle2 = document.createElement("span");
  let circle3 = document.createElement("span");

  circle1.setAttribute("id","spantrail");
  circle2.setAttribute("id","spantrail2");
  circle3.setAttribute("id","spantrail3");
  let x = e.offsetX;
  let y = e.offsetY;
  circle1.style.left = x + "px";
  circle1.style.top = y + "px";
  circle2.style.left = x + "px";
  circle2.style.top = y + "px";
  circle3.style.left = x + "px";
  circle3.style.top = y + "px";
  let size = (Math.random() * 30)+3;
  circle1.style.width = 1 + size + "px";
  circle1.style.height = 1 + size + "px";
  circle2.style.width = 1 + size + "px";
  circle2.style.height = 1 + size + "px";
  circle3.style.width = 1 + size + "px";
  circle3.style.height = 1 + size + "px";
  body.appendChild(circle1);
  body.appendChild(circle2);
  body.appendChild(circle3);
  setTimeout(function() {
    circle1.remove();
    circle2.remove();
    circle3.remove();
  }, 600);
});*/
/*Mouse Trail End*/
/*
particlesJS("particles-js",
{
   "particles":{
    "number":{
      "value":185,
      "density":{
        "enable":true,
        "value_area":1341.5509907748635
      }
    },
"color":{
  "value":"#13E8E9"
},
"shape":{
  "type":"circle",
  "stroke":{
    "width":0,
    "color":"#000000"
  },
  "polygon":{
    "nb_sides":100
  },
  "image":{
    "src":"","width":100,
    "height":100
  }
},
"shadow": {
  "color": "#3CA9D1",
  "blur": 5
}
,
"opacity":{
  "value":1,
  "random":true,
  "anim":{
    "enable":true,
    "speed":0.8120772123013451,
    "opacity_min":0,
    "sync":false
  }
},
"size":{
  "value":10,
  "random":true,
  "anim":{
    "enable":false,
  "speed":2,
  "size_min":0.3,
  "sync":false
}
},
"line_linked":{
  "enable":false,
  "distance":150,
  "color":"#ffffff",
  "opacity":0.4,
  "width":1
},
"move":{
  "enable":true,
  "speed":1,
  "direction":"none",
  "random":true,
  "straight":false,
  "out_mode":"out",
  "bounce":false,
  "attract":{
    "enable":false,
    "rotateX":600,
    "rotateY":600
  }
}
},
"interactivity":{
  "detect_on":"canvas",
  "events":{
    "onhover":{
      "enable":false,
      "mode":"grab"
    },
    "onclick":{
      "enable":false,
      "mode":"push"
    },
    "resize":true
  },"modes":{
    "grab":{
      "distance":400,
      "line_linked":{
        "opacity":1
      }
    },
"bubble":{
  "distance":316.71011279752463,
  "size":0,
  "duration":6.252994534720358,
  "opacity":0,
  "speed":3
},
"repulse":{
  "distance":535.9709601188878,
  "duration":0.4
},
"push":{
  "particles_nb":4
},
"remove":{
  "particles_nb":2
}
}
},
"retina_detect":true
});

*/

