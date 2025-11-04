'use strict';

const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.button');

function isCharDigit(char) {
    return /\d/.test(char);
}

function isOperator(ch) {
    return ['+', '-', '*', '/', '%'].includes(ch);
}

function doOperation() {
    const expression = screen.innerText;

    if (expression.trim().length === 0) {
        return;
    }
    else if (isOperator(lastChar)) {
        return "Error";
    }
    else {
        // expression
    }
}

// does operator and operation precedence logic
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        const value = buttons[i].innerText;
        const current = screen.innerText;
        const lastChar = current.slice(-1);

        // CLEAR
        if (value === 'AC') {
            screen.innerText = '';
            return;
        }

        // DELETE
        if (value === 'DEL') {
            screen.innerText = current.slice(0, -1);
            return;
        }

        if (value === '=') {
            // expression
        }

        // PREVENT consecutive operators
        if (isOperator(value)) {
            if (current === '' || isOperator(lastChar)) {
                return; // reject
            }
        }

        // ADD to screen
        screen.innerText += value;
    };
}

