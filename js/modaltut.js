var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");
var elementIsClicked = false;

window.onload = function () {
var tensec = 60 * 0.15,
display = document.querySelector('#time');
startTimer(tensec, display);
toggleModal();
};
function toggleModal() {
    modal.classList.toggle("show-modal"); 
    
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
        
    }
}

function etoggleModal() {
   modal.style.display="none";
    
}
function ewindowOnClick(event) {
    if (event.target === modal) {
      modal.style.display="none";
        
    }
}

function startTimer(duration, display) {
var timer = duration, minutes, seconds;
setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
        timer = duration;
        toggleModal();
        modal.style.display="none";
    }
}, 1000);
}



closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
closeButton.addEventListener("click", etoggleModal);
window.addEventListener("click", ewindowOnClick);