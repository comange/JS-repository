/*
 * Напиши скрипт який рахує суму елементів двух масивів.
 */

const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];

const multiArr = array1.concat(array2);
let multiArrAdded = 0;
for (let num of multiArr) {
    multiArrAdded *= num
}
console.log(multiArrAdded)