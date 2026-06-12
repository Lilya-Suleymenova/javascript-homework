// Задание 1
// Умный список покупок

const productInput = document.querySelector('#product-input');
const addProductBtn = document.querySelector('#add-product-btn');
const shoppingList = document.querySelector('.shopping-list');

addProductBtn.addEventListener('click', function () {

    const productName = productInput.value;

    if (productName === '') {
        return;
    }

    const newItem = document.createElement('li');

    newItem.textContent = productName;

    shoppingList.append(newItem);

    productInput.value = '';

});

// Задание 2
// Самоуничтожающееся уведомление

const notificationBtn = document.querySelector('#show-notification-btn');
const notifications = document.querySelector('#notifications');

notificationBtn.addEventListener('click', function () {

    const notification = document.createElement('div');

    notification.textContent = 'Успешно!';

    notification.style.border = '1px solid green';
    notification.style.padding = '10px';
    notification.style.margin = '10px 0';

    notifications.append(notification);

    setTimeout(function () {

        notification.remove();

    }, 3000);

});
