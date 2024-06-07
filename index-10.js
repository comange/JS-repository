const meatProducts = ['lamb', 'beef', 'poultry', 'veal', 'venison'];
let gluedMeatProducts = meatProducts.join(', ');
console.log(gluedMeatProducts);

let gluedMeatProducts2 = '';
for (let num of meatProducts) {
    gluedMeatProducts2 += num + ', '
}
console.log(gluedMeatProducts2);

let cardArr = [
    'Card-1',
    'Card-2',
    'Card-3',
    'Card-4',
    'Card-5',
    'Card-6',
    'Card-7'
];

const removedCard = cardArr.splice(2, 1);

const addedCard = cardArr.splice(6, 0, 'Card-8');

const updatedCard = cardArr.splice(2, 1, 'Карточка-4')
console.log(cardArr);
console.log(removedCard);
console.log(updatedCard);