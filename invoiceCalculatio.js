'use strict'
var $$ = document.getElementById.bind(document);

const start = $$('start-up');
const end = $$('end-of-term');
const tax = 0.1;
const numberOfLetters = $$('number-of-letters');
const total = $$('total-amount-payable');

const cal = $$('cal');
const clear = $$('clear');

// console.log(start.nextElementSibling);

function valid(value) {
    let regex = /^\d+$/;
    return regex.test(value)?true:false;
}


window.onload = function() {
    start.onchange = () => {
        let value = start.value.trim();
        let isValid = valid(value);
        if (!isValid) {
            start.nextElementSibling.classList.remove('hide_element');
        }
        if (isValid) {
            start.nextElementSibling.classList.add('hide_element');
        }
    }

    end.onchange = () => {

        if (end.value < start.value || !valid(end.value)) {
            end.nextElementSibling.classList.remove('hide_element');
        } 
        else { 
            end.nextElementSibling.classList.add('hide_element');
            numberOfLetters.value = end.value - start.value; 
        }
    }

    cal.onclick = () => {
        if (numberOfLetters.value <= 50) {
            let value = numberOfLetters.value*1480 + (numberOfLetters.value*1480)*tax;
            value = value.toFixed(2);
            total.value = value;
        }
        else if (numberOfLetters.value <=100) {
            let value = numberOfLetters.value*1500 + (numberOfLetters.value*1500)*tax;
            value = value.toFixed(2);
            total.value = value;
        }
        else if (numberOfLetters.value > 100) {
            let value = numberOfLetters.value*1800 + (numberOfLetters.value*1800)*tax;
            value = value.toFixed(2);
            total.value = value;
        }
    }
    clear.onclick = () => {
        start.value = '';
        end.value = '';
        numberOfLetters.value = '';
        total.value = ''
        start.focus();}
    }