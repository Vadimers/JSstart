// Завдання 1: Функція для генерації випадкового числа
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showRandom(min, max) {
    const result = getRandomInt(min, max);
    document.getElementById('randomResult').textContent = 
        `Випадкове число від ${min} до ${max}: ${result}`;
}

// Завдання 2: Функція для суми великих чисел
function sumBigIntegers(numStr1, numStr2) {
    return BigInt(numStr1) + BigInt(numStr2);
}

function showBigIntSum() {
    const result = sumBigIntegers('9007199254740991', '9007199254740991');
    document.getElementById('bigIntResult').textContent = 
        `Результат: ${result}`;
}

// Завдання 3: Функція привітання
function greet(msg, name) {
    return `${msg}, ${name}`;
}

function showGreet(msg, name) {
    const result = greet(msg, name);
    document.getElementById('greetResult').textContent = 
        `Результат: ${result}`;
}