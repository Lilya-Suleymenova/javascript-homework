function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Прошло ${ms} миллисекунд`);
        }, ms);
    });
}

delay(2000)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log('Ошибка:', error);
    });


// 2 задание

function loadUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: 'Иван'
            });
        }, 1000);
    });
}

function loadOrder(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                order: 'Ноутбук',
                owner: user.name
            });
        }, 1000);
    });
}

loadUser()
    .then((user) => {
        console.log('Пользователь загружен:', user.name);
        return loadOrder(user);
    })
    .then((order) => {
        console.log(`Заказ "${order.order}" принадлежит ${order.owner}`);
    })
    .catch((error) => {
        console.log('Ошибка:', error);
    });
