// 1.Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.
let firstArray = [30, 40, 567];
firstArray[1] = 10;

// 2.Створити масив із трьох рядків. Додати до масиву ще одну рядків.
let secondArray = ['44', '89', '1'];
secondArray[3] = '2';

// 3.Створити скрипт який поверне суму всіх чисел в масиві.
let fourthArray = [90, 564, 3333, 4];
let fourthArraySum = 0;
for (i = 0; i < fourthArray.length; i += 1) {
    fourthArraySum += fourthArray[i];
}

// 4.Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.
const thirdArray = ['boo', 'gaga']
for (i = 0; i < thirdArray.lenght; i += 1) {
    console.log(thirdArray[i])
}

// 5.Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.
const fifthArray = ['rock', 'scissors', 'paper', 'well', 'needle'];
for (let i = 0; i < fifthArray.length; i += 1) {
if (fifthArray[i].length > 5) {console.log(fifthArray[i])} else {continue}
}

// 6.Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.
let sixthArray = [6, 9, 12, 18, 27, 777, 22, 0, 7, 7];
let maxSixthArrayNumber = 0;
for (let i = 0; i < sixthArray.length; i += 1) {
    if (sixthArray[i] >= maxSixthArrayNumber) {maxSixthArrayNumber = sixthArray[i]} else {continue}
}
console.log(maxSixthArrayNumber)
// 7.Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.

let seventhArray = [6, 9, 12, 18, 27, 777, 22, 0, 7, 7];
// я візьму такий же массив ;)

for (let i = 0; i < seventhArray.length; i += 1) {
    if (seventhArray[i] % 2) {console.log(seventhArray[i])} else {continue};
}
