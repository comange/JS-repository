"use strict"

{

// let fahrenheitTemp = a2;    
// let celsiusTemp = a1;
// a1 = 30;
// a2 = a1 * 1.8 + 32;
// console.log(a2);

// Калькулятор повинен працювати з нефіксовою датою (кожен раз user вводить величини які йому потрібні),
// тому я двивився, як я можу розділити значення температур, щоб їх можно було заміняти неруйнуючи структуру коду.
// по плану celsiusTemp/fahrenheitTemp би не змінювались, та а1/а2 давали би змогу ввести бажане число,
// Але В Мене Так Не Вийшло.

let celsiusTemp = 30;
let fahrenheitTemp = celsiusTemp * 1.8 + 32;
console.log(fahrenheitTemp);

let oneMonth = 30;
let hoursInAMonth = oneMonth * 24;
let minutesInAMonth = hoursInAMonth * 60;
console.log(hoursInAMonth);
console.log(minutesInAMonth);

const hitPoints = 100;
const stamina = 300;
console.log(hitPoints - 56);
console.log(stamina - 75);

let product = 150;
console.log(product * 90% + 'Euro');

let dividend = 13098.77;
console.log(Math.floor(dividend));

let numTextString = 'hy56.90thyu'
console.log(Number.parseFloat(numTextString));

let integer = 'gt4k67haha';
console.log(parseInt(integer));

let square = 67;
console.log(Math.sqrt(square));

let numString = '4';
let numNotString = 4;
let reformedNumString = parseInt(numString);
console.log(reformedNumString)
let reformedNumNotString = toString(numNotString)
console.log(reformedNumNotString)

}