// Задание 1
// Инвентаризация

const shoppingList = document.getElementById('shopping-list');

const items = document.querySelectorAll('.item');

console.log(
    `Количество продуктов в списке: ${items.length}`
);


// Задание 2
// Найти шпиона

const secretPerson = document.querySelector('.secret');

console.log(
    `Найден: ${secretPerson.textContent}`
);

// Задание 3
// Олдскул против Модерна

// 1 вариант
const btn1 = document.getElementById('submit-btn');

// 2 вариант
const btn2 = document.querySelector('#submit-btn');

// 3 вариант
const btn3 = document.querySelector('.primary');

console.log(btn1);
console.log(btn2);
console.log(btn3);
