

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // Stops the fuction if there's no audio associated with that key.
    audio.currentTime = 0; // rewinds the audio sample to the start (only noticable with rapid presses)
    audio.play();
    key.classList.add('playing');

    console.log(key);
};

function removeTransition(e) {
    if(e.propertyName !== 'transform' ) return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound)