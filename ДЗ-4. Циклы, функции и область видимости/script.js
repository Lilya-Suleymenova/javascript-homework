

// Задание 1
// Калькулятор вклада

function calculateDeposit(amount, percent, years) {

    for (let i = 1; i <= years; i++) {
        amount = amount + (amount * percent / 100);
    }

    return amount;
}

function showDeposit() {

    let result = calculateDeposit(200000, 10, 5);

    console.log(`Через 5 лет на счете будет ${result.toFixed(2)} тенге`);

    alert(`Через 5 лет на счете будет ${result.toFixed(2)} тенге`);
}


// Задание 2
// Угадай число

function guessGame() {

    let secretNumber = 7;

    while (true) {

        let userInput = prompt(
            'Угадай число от 1 до 10. Для выхода напиши "выход"'
        );

        if (userInput === null || userInput.toLowerCase() === 'выход') {
            alert('Игра окончена');
            break;
        }

        if (Number(userInput) === secretNumber) {
            alert('Поздравляю! Вы угадали!');
            break;
        } else {
            alert('Не угадал, попробуй еще раз!');
        }
    }
}
