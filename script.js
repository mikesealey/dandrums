function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;
  key.classList.remove('playing');
  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

function changeImage(e) { //not currently working
  if (e.keyCode == "65") {        // clap
    document.querySelector("body").style.backgroundImage = "url(./pictures/neutral.JPG)"
  } else if (e.keyCode == "83") { //hihat
    document.querySelector("body").style.backgroundImage = "url(./pictures/neutral.JPG)"
    setTimeout(() => { document.querySelector("body").style.backgroundImage = "url(./pictures/openhihats.JPG)"; }, 30);
  } else if (e.keyCode == "68") { // kickdrum
    document.querySelector("body").style.backgroundImage = "url(./pictures/neutral.JPG)"
    setTimeout(() => { document.querySelector("body").style.backgroundImage = "url(./pictures/neutral.JPG)"; }, 30);
  } else if (e.keyCode == "70") { // hihat
    document.querySelector("body").style.backgroundImage = "url(./pictures/neutral.JPG)"
    setTimeout(() => { document.querySelector("body").style.backgroundImage = "url(./pictures/openhihats.JPG)"; }, 30); 
  } else if (e.keyCode == "71") { // triggerpad / boom
    document.querySelector("body").style.backgroundImage = "url(./pictures/neutral.JPG)"
    setTimeout(() => { document.querySelector("body").style.backgroundImage = "url(./pictures/trigger.JPG)"; }, 30);
  } else if (e.keyCode == "72") { // ride
    document.querySelector("body").style.backgroundImage = "url(./pictures/neutral.JPG)"
    setTimeout(() => { document.querySelector("body").style.backgroundImage = "url(./pictures/ride.JPG)"; }, 30);
  } else if (e.keyCode == "74") { // snare
    document.querySelector("body").style.backgroundImage = "url(./pictures/neutral.JPG)"
    setTimeout(() => { document.querySelector("body").style.backgroundImage = "url(./pictures/snare.JPG)"; }, 30);
  } else if (e.keyCode == "75") { // tom
    document.querySelector("body").style.backgroundImage = "url(./pictures/neutral.JPG)"
    setTimeout(() => { document.querySelector("body").style.backgroundImage = "url(./pictures/tom4.JPG)"; }, 30);
  } else if (e.keyCode == "76") { // gong
    document.querySelector("body").style.backgroundImage = "url(./pictures/neutral.JPG)"
    setTimeout(() => { document.querySelector("body").style.backgroundImage = "url(./pictures/gong.JPG)"; }, 30);
  }
}
/*
function myFunction() { // for testing purposes
  console.log("button pressed")
  document.querySelector("body").style.backgroundImage = "url(./pictures/gong.JPG)"
}
*/

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
window.addEventListener('keydown', changeImage);

