// a1 = 30;
// a2 = a1 * 1.8 + 32;    
// let celsiusTemp = a1;
// let fahrenheitTemp = a2;
// console.log(a2);

// Калькулятор повинен працювати з нефіксовою датою (кожен раз user вводить величини які йому потрібні),
// тому я дивився, як я можу розділити значення температур, щоб їх можно було заміняти неруйнуючи структуру коду.
// по плану celsiusTemp/fahrenheitTemp би не змінювались, та а1/а2 давали би змогу ввести бажане число,
// Але В Мене Так Не Вийшло.

// 1
let celsiusTemp = 30;
let fahrenheitTemp = celsiusTemp * 1.8 + 32;
console.log(fahrenheitTemp);

// 2
let oneMonth = 30;
let hoursInAMonth = oneMonth * 24;
let minutesInAMonth = hoursInAMonth * 60;
console.log(hoursInAMonth);
console.log(minutesInAMonth);

// 3 come back later
const HP = 100;
const SP = 300;
let xAttack = -56;
let yMove = -75; 
console.log(HP + xAttack);
console.log(SP + yMove);

// 4
let product = 150;
console.log(product * 90% + 'Euro');

// 5
let dividend = 13098.77;
console.log(Math.floor(dividend));

// 6
let numTextString = 'hy56.90thyu'
console.log(Number.parseFloat(numTextString));

// 7
let integerThis = 'gt4k67haha';
console.log(parseInt(integerThis));

// 8
let squareThis = 67;
console.log(Math.sqrt(square));

// 9
let numString = '4';
let numNotString = 4;
let reformedNumString = parseInt(numString);
console.log(reformedNumString)
let reformedNumNotString = toString(numNotString)
console.log(reformedNumNotString)