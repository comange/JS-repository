"use strict"

//1.Вивести result в консоль. Перевірити тип змінної result= 5+5+’5’.
let result;
result = 5 + 5 + '5';
console.log(result);
console.log(typeof result);

// 2. Створіть змінну email з вашою електронною адресою. Напишіть скрипт,
// який перевіряє чи містить змінна email символ @ і рахує загальну кількість символів.
// Результат виведіть в консоль.

let email = 'secretUser@gmail.com';

console.log(email.includes('@'))
console.log(email.length)
//3. Записати в окремих змінних кожне слово: My, name, is.
//  Поєднати всі слова в змінну fullName. До змінної fullName додати ‘Viktor’. fullName вивести в консоль.

const a = 'My';
const b = 'name';
const c = 'is';
let fullName = a + b + c;
fullName += 'Viktor';
console.log(fullName)

//4. Створіть змінну userName з ім’ям користувача і змінну payment з сумою до оплати.
//  За допомогою шаблонного рядка виведіть на екран через alert повідомлення на прикладі цього:
//   «Дякуємо, Олександро! До сплати 300 гривень»

let userName = 'Олександро!';
let payment = '300 грн';
console.log(`Дякуємо, ${userName} До сплати ${payment}`)
