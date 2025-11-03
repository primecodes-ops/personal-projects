'use strict'

function Bin2Dec(binary) {
    let decimalValue = 0;
    let base = 1;
    const trimmed = binary.trim();
    for (let i = trimmed.length - 1; i >= 0; i--) {
        if (trimmed[i] == '1') {
            decimalValue += base;
        }
        base *= 2;
    }
    return decimalValue;
}

function showError(message) {
    error.textContent = message;
    error.style.display = 'block';
}

function clearError() {
    error.textContent = '';
    error.style.display = 'none';
}

function isBinary(binary) {
    const trimmed = binary.trim();

    if (trimmed === '') {
        showError('Please enter a binary number.');
        return false;
    }
    if (trimmed.length > 8) {
        showError('Input too long: maximum 8 bits allowed.');
        return false;
    }
    if (!/^[01]+$/.test(trimmed)) {
        showError('Invalid input: only 0 and 1 are allowed.');
        return false;
    }
    clearError();
    return true;
}


const input = document.getElementById("binaryInput");
const button = document.getElementById("convertBtn")
const result = document.getElementById("result");
const error = document.getElementById('error');

button.addEventListener('click', () => {
    const binary = input.value;
    if (!isBinary(binary)) return;
    const decimal = Bin2Dec(binary);
    result.textContent = `Decimal: ${decimal}`;
});

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') button.click();
});
