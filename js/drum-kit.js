let cases = [];
let sounds = [];

let touches = [97,115,100,102,103,104,106,107,108];
//récupérer les buttons
for (let i=1; i<=9; i++){
    cases.push(document.getElementById(i));
}
//récupérer les sons
for (let i=1; i<=9; i++){

    let myAudio = new Audio('../assets/sounds/'+i+'.mp3');
    sounds.push(myAudio);
}
//eventListener sur chaque button
for (let i=0; i<cases.length; i++){
    cases[i].addEventListener('click', function (){
        sounds[i].play();
      });
}
//attribuer les sons aux touches du clavier
window.onkeypress = function(event) {
    for(let i=0;  i<cases.length; i++){
        sounds[i].pause();
        sounds[i].currentTime=0;

        event.keyCode === touches[i]? sounds[i].play() + cases[i].classList.add('active'): cases[i].classList.remove('active');
    }
}