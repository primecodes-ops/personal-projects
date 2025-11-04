'use strict'

function precedence(oper) {
    if (oper == '+' || oper == '-') return 1;
    if (oper == '*' || oper == '/') return 2;
    if (oper == '^') return 3;
    return 0;
}

function infixToPostfix(infix) {
    const result = [];
    const operators = [];
    let numberBuffer = '';

    for (let i = 0; i < infix.length; i++) {
        const value = infix[i];

        if (!isNaN(value) && value !== ' ') {
            // Build multi-digit numbers
            numberBuffer += value;
        } 
        else if ('+-*/^'.includes(value)) {
            // Push any completed number first
            if (numberBuffer !== '') {
                result.push(numberBuffer);
                numberBuffer = '';
            }

            // Handle operator precedence
            while (
                operators.length &&
                ((value === '^' && precedence(operators[operators.length - 1]) > precedence(value)) ||
                 (value !== '^' && precedence(operators[operators.length - 1]) >= precedence(value)))
            ) {
                result.push(operators.pop());
            }
            operators.push(value);
        }
    }

    // Push last buffered number if there is one
    if (numberBuffer !== '') {
        result.push(numberBuffer);
    }

    // Push remaining operators
    while (operators.length) {
        result.push(operators.pop());
    }

    return result.join(' ');
}


function calculatePostfix(postfix) {
    const operands = [];
    const tokens = postfix.split(' ');

    for (const value of tokens) {
        if (value === '') continue;

        if (!isNaN(value)) {
            operands.push(Number(value));
        } else {
            const b = operands.pop();
            const a = operands.pop();
            let res = 0;

            switch (value) {
                case '+': res = a + b; break;
                case '-': res = a - b; break;
                case '*': res = a * b; break;
                case '/': res = a / b; break;
                case '^': res = Math.pow(a, b); break;
            }

            operands.push(res);
        }
    }

    return operands.pop();
}

const operator = document.querySelectorAll('.operator');
const number = document.querySelectorAll('.number');
const screen = document.querySelector('.screen');
const clear = document.querySelector('.ac');
const del = document.querySelector('.delete');
const equal = document.querySelector('.equals');

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        screen.innerText += number[i].innerText;
    });
}

for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        screen.innerText += operator[i].innerText;
    });
}

equal.addEventListener('click', function () {
    const infix = screen.innerText;
    const postfix = infixToPostfix(infix);
    const result = calculatePostfix(postfix);
    screen.innerText = result;
});

clear.addEventListener('click', function () {
    screen.innerText = '';
});

del.addEventListener('click', function () {
    screen.innerText = screen.innerText.slice(0, -1);
});