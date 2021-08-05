'use strict'
let input = document.getElementById('screen__input'),
    inputDisPlayed = false;
let SC_result = document.getElementById('screen__result'),
    result = document.getElementById('result'),
    getNumber = [],
    getCalculation = [];
let del = document.getElementById('clear');
let ac = document.getElementById('clearAll');
let number = document.querySelectorAll('.number'),
    operators = document.querySelectorAll('.operator');
let x = 4,
    S = 0,
    index = 0,
    count = 0,
    lth = 17,
    isOperations = false;
//--------------------------------------------------------
//number
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function(e) {
        let currentString = input.innerHTML;
        if (currentString.length < lth) {
            let lastChar = currentString[currentString.length - 1];
            if (lastChar === '-' || lastChar === '+' || lastChar === "×" || lastChar === '÷')
                isOperations = true;
            showSize(currentString, lastChar);
            if (inputDisPlayed === false) {
                if (currentString[0] == '0' && currentString.length == 1) {
                    input.innerHTML = '';
                }
                input.innerHTML += e.target.innerHTML;
            } else if (inputDisPlayed === true && (lastChar === '-' || lastChar === '+' || lastChar === "×" || lastChar === '÷')) {
                inputDisPlayed = false;
                input.innerHTML += e.target.innerHTML;
            } else {
                inputDisPlayed = false;
                input.innerHTML += e.target.innerHTML;
            }
        }
    });
}

function showSize(current, last) {
    if (current.length > 10 && (last !== '-' || last !== '+' || last !== "×" || last !== '÷') && isOperations === false) {
        let st = document.querySelector('.screen__input');
        if (current.length >= 15) {
            x -= 0.21;
        } else {
            x -= 0.3;
        }
        st.style.fontSize = `${x}rem`;
        if (x <= 3) {
            st.style.letterSpacing = `.${2}rem`;
        }
    }
}
//----------------------------------------------
//operators
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function(e) {
        inputDisPlayed = true;
        let currentString = input.innerHTML,
            lastChar = currentString[currentString.length - 1],
            st = document.querySelector('.screen__input');
        st.style.fontSize = "2rem";
        st.style.letterSpacing = '-.1rem';
        if (lastChar === '-' || lastChar === '+' || lastChar === '×' || lastChar === '÷') {
            let newString = currentString.substring(0, currentString.length - 1);
            input.innerHTML = newString + e.target.innerHTML;
            getCalculation[count - 1] = e.target.innerHTML;
            console.log(getCalculation);
        } else {
            input.innerHTML += e.target.innerHTML;
            getCalculation[count] = input.innerHTML[input.innerHTML.length - 1];
            getNumber[count] = Number(input.innerHTML.substring(index, input.innerHTML.length - 1));
            index = input.innerHTML.length;
            console.log(getNumber[count], index, getCalculation);
            count++;
            lth = 25;
        }
    });
}
//--------------------------------------------------
//AC_DEL
del.onclick = function() {
        let st = document.querySelector('.screen__input');
        let currentString = input.innerHTML
        let lengthString = currentString.length;
        input.innerHTML = currentString.substring(0, currentString.length - 1);
        if (lengthString === 1) {
            st.style.fontSize = '4rem';
            st.style.letterSpacing = '.1rem';
            lth = 17;
            x = 4;
            index = 0;
            count = 0;
            isOperations = false;
            input.innerHTML = '0';
        }
        if (currentString.indexOf('-') === -1 && currentString.indexOf('+') && currentString.indexOf('×') === -1 && currentString.indexOf('÷') === -1) {
            (currentString.length <= 11) ?
            x = 4: currentString.length >= 15 ?
                x += .21 : x += 0.3;
            st.style.fontSize = `${x}rem`;
            x <= 3 ?
                st.style.letterSpacing = `.${2}rem` :
                st.style.letterSpacing = `.${1}rem`;
            lth = 17;
            isOperations = false;
        }
    }
    //---------------------------------------------------------
    //
ac.onclick = function() {
        input.innerHTML = '0';
        x = 4;
        S = 0;
        index = 0;
        count = 0;
        lth = 17;
        isOperations = false;
        let setSize = document.querySelector('.screen__input');
        setSize.style.fontSize = `${x}rem`;
        setSize.style.letterSpacing = '.1rem';
    }
    //----------------------------------------------------------
    //perform_calculate
    //------------------
result.onclick = function() {
    getNumber[count] = Number(input.innerHTML.substring(index, input.innerHTML.length));
    console.log(getNumber);
    if (getCalculation[0] === undefined)
        SC_result.innerHTML = getNumber[0];
    else
        for (let i = 0; i < count; i++) {
            switch (getCalculation[i]) {
                case '+':
                    S += getNumber[i] + getNumber[i + 1];
                    SC_result.innerHTML = S;
                    console.log(getNumber[i + 1]);
                    break;
                case '-':
                    S += getNumber[i] - getNumber[i + 1];
                    SC_result.innerHTML = S;
                    break;
                case '×':
                    S += getNumber[i] * getNumber[i + 1];
                    SC_result.innerHTML = S;
                    break;
                case '÷':
                    S += getNumber[i] / getNumber[i + 1];
                    S = Number(S.toFixed(4))
                    SC_result.innerHTML = S;
                    break;
            }
        }
}