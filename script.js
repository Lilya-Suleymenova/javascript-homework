
const firstName = prompt('Введите ваше имя:', 'Иван');
const lastName = prompt('Введите вашу фамилию:', 'Иванов');
const age = prompt('Введите ваш возраст:', '25');
const city = prompt('Введите ваш город:', 'Астана');
const profession = prompt('Введите вашу профессию:', 'Программист');

console.log('Имя:', firstName);
console.log('Фамилия:', lastName);
console.log('Возраст:', age);
console.log('Город:', city);
console.log('Профессия:', profession);

const businessCard = `

Визитная карточка
Имя: ${firstName} ${lastName}
Возраст: ${age} лет
Город: ${city}
Профессия: ${profession}
`;

console.log(businessCard);

alert(businessCard);
