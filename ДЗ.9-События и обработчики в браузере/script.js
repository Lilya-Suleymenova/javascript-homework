// Задание 1
// Счетчик туристов

const counter = document.querySelector('#counter');
const addBtn = document.querySelector('#add-btn');

let tourists = 0;

addBtn.addEventListener('click', function () {

    tourists++;

    counter.textContent = tourists;

});


// Задание 2
// Фильтр слов в отзыве

const reviewInput = document.querySelector('#review-input');

reviewInput.addEventListener('input', function (event) {

    const text = event.target.value.toLowerCase();

    if (text.includes('плохо')) {

        reviewInput.style.borderColor = 'red';

    } else {

        reviewInput.style.borderColor = '';

    }

});
