
// Задание 1
// Банковский счет

const bankAccount = {
    ownerName: "Лиля",
    cardNumber: "4400 1234 5678 9012",
    balance: 50000,

    deposit(amount) {
        this.balance += amount;

        console.log(
            `Счет пополнен на ${amount} ₸. Текущий баланс: ${this.balance} ₸`
        );
    },

    withdraw(amount) {

        if (amount <= this.balance) {

            this.balance -= amount;

            console.log(
                `Перевод на ${amount} ₸ выполнен. Остаток: ${this.balance} ₸`
            );

        } else {

            console.log(
                `Недостаточно средств! На балансе всего ${this.balance} ₸`
            );

        }
    }
};

function runBankAccount() {

    bankAccount.deposit(15000);

    bankAccount.withdraw(100000);

    bankAccount.withdraw(5000);
}

// Задание 2
// Корзина магазина

const cart = {
    "Мясо (казы)": 12000,
    "Бауырсаки": 1500,
    "Кумыс": 2000,
    "Чай": 1800
};

function showCartTotal() {

    let totalSum = 0;

    for (let product in cart) {

        totalSum += cart[product];

        console.log(
            `${product}: ${cart[product]} ₸`
        );
    }

    console.log(`Итого к оплате: ${totalSum} ₸`);

    alert(`Итого к оплате: ${totalSum} ₸`);
}
