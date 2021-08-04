'use strict'
let input = document.getElementById('screen__input'),
    inputDisPlayed = false;
let result = document.getElementById('screen__result');
let number = document.querySelectorAll('.number'),
    operators = document.querySelectorAll('.operator');

//---------------------------------------------
//number
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function(e) {
        let currentString = input.innerHTML;
        console.log(e.target.innerHTML.length);
        let lastChar = currentString[currentString.length - 1];
        if (inputDisPlayed === false) {
            if (currentString[0] == '0' && currentString.length == 1) {
                input.innerHTML = '';
            }
            input.innerHTML += e.target.innerHTML;
        } else {
            inputDisPlayed = false;
            input.innerHTML += e.target.innerHTML;
        }
    });
}
//----------------------------------------------
//operators
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function(e) {
        if (inputDisPlayed === false) {
            let currentChar = e.target.innerHTML;
            let size = document.querySelector('.screen__input');
            size.style.fontSize = "2rem";
            input.innerHTML += e.target.innerHTML;

            // if () {

            // }
        }
    });

}