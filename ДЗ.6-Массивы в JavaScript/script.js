
// Задание 1
// Электронная очередь

function queueTask() {

    const queue = ['Арман', 'Динара', 'Ерлан'];

    queue.push('Серик');

    queue.unshift('Айгуль');

    const currentClient = queue.shift();

    console.log(
        `К окну номер 1 приглашается: ${currentClient}`
    );

    console.log(
        `Остаток очереди: ${queue}`
    );

    alert(`К окну номер 1 приглашается: ${currentClient}`);
}

// Задание 2
// Финансовый аналитик Kaspi

function transactionsTask() {

    const transactions = [1200, 45000, 800, 15500, 300, 24000];

    let totalSum = 0;
    let bigPurchasesCount = 0;

    for (let transaction of transactions) {

        totalSum += transaction;

        if (transaction > 10000) {
            bigPurchasesCount++;
        }
    }

    console.log(
        `Итого потрачено за день: ${totalSum} ₸`
    );

    console.log(
        `Количество крупных покупок (более 10000 ₸): ${bigPurchasesCount}`
    );

    alert(
        `Итого потрачено: ${totalSum} ₸\nКрупных покупок: ${bigPurchasesCount}`
    );
}
