let display = document.getElementById('resultado');
let expression = '';

function insert(char) {
    expression += char;
    display.value = expression;
}

function clearDisplay() {
    expression = '';
    display.value = expression;
}

function backspace() {
    expression = expression.slice(0, -1);
    display.value = expression;
}

function calculate() {
    expression = eval(expression);
    display.value = expression;
}
