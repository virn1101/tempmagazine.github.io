var initialX = null;
var initialY = null;

var ball = document.getElementById('ball');

function handleOrientationEvent(event) {

  var x = event.beta ? event.beta : event.y * 90;
  var y = event.gamma ? event.gamma : event.x * 90;

  //window.console && console.info('Raw position: x, y: ', x, y);

  if (!initialX && !initialY) {

    initialX = x;
    initialY = y;

  } else {

    var positionX = initialX - x;
    var positionY = initialY - y;

    ball.style.top = (0 + positionX * 70) + 'px';
   // ball.style.left = (90 + positionY * 5) + 'px';
  }
}
/*
function isEventFired() {
  if (!initialX && !initialY) {
    var warningElement = document.getElementById('warning');
    warningElement.innerText = 'Warning: Cannot receive device orientation events, this browser is not supported.';
    warningElement.style.display = 'inline-block';
  }
}
*/
// Webkit en Mozilla variant beide registreren.
window.addEventListener("MozOrientation", handleOrientationEvent, true);
window.addEventListener("deviceorientation", handleOrientationEvent, true);

//setTimeout(isEventFired, 2000);