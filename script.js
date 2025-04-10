// Завдання 1: Функція для генерації випадкового числа
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showRandom(min, max) {
    const result = getRandomInt(min, max);
    const output = `Випадкове число від ${min} до ${max}: ${result}`;
    document.getElementById('randomResult').textContent = output;
    console.log(output); 
}

// Завдання 2: Функція для суми великих чисел
function sumBigIntegers(numStr1, numStr2) {
    return BigInt(numStr1) + BigInt(numStr2);
}

function showBigIntSum() {
    const result = sumBigIntegers('9007199254740991', '9007199254740991');
    const output = `Результат: ${result}`;
    document.getElementById('bigIntResult').textContent = output;
    console.log(output); 
}

// Завдання 3: Функція привітання
function greet(msg, name) {
    return `${msg}, ${name}`;
}

function showGreet(msg, name) {
    const result = greet(msg, name);
    const output = `Результат: ${result}`;
    document.getElementById('greetResult').textContent = output;
    console.log(output); 
}