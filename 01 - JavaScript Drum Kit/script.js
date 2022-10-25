const keys = document.querySelectorAll('.key');
const keysArray = Array.from(keys);

//Get the keypress of a single button to be tied to the right icon
const body = document.querySelector('body');
body.addEventListener('keydown', e =>{
    let key = keyPress(e.target, e);
    if(key){
        key.classList.add('playing');
        play(key);
    }
});
body.addEventListener('keyup', e =>{
    let key = keyPress(e.target, e);
    if(key) {
        key.classList.remove('playing');
    }
});
//Add the same functionality to each
function keyPress(key, e){
    for(key of keysArray){
        if(e.keyCode === +key.getAttribute('data-key')){
            return key;
        }
    }
}
//Play sound on keydown and toggle playing class
function play(key){
    let audio = new Audio();
    audio.src = document.querySelector(`audio[data-key ="${key.getAttribute('data-key')}"]`).src;
    audio.play();
}