onst age = 25;              
const name = 'Иван';         
const isStudent = true;      
let notDefined;              
const emptyValue = null; 


console.log('Значение:', age);
console.log('Тип:', typeof age);

console.log('Значение:', name);
console.log('Тип:', typeof name);

console.log('Значение:', isStudent);
console.log('Тип:', typeof isStudent);

console.log('Значение:', notDefined);
console.log('Тип:', typeof notDefined);

console.log('Значение:', emptyValue);
console.log('Тип:', typeof emptyValue);



const ageStr = String(age);
console.log('После преобразования в строку:', ageStr);
console.log('Тип:', typeof ageStr);


const numberStr = '100';
const number = Number(numberStr);
console.log('После преобразования в число:', number);
console.log('Тип:', typeof number);
