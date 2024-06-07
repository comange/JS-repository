let totalOrderQuantity
const orderCandy = prompt('insert amount of candy you would order')
const orderCandyNum = Number(orderCandy)
console.log(orderCandyNum)

const orderCake = prompt('insert amount of cake you would order')
const orderCakeNum = Number(orderCake)
console.log(orderCakeNum)

const orderFruit = prompt('insert amount of fruit you would order')
const orderFruitNum = Number(orderFruit)
console.log(orderFruitNum)

totalOrderQuantity = orderCandyNum + orderCakeNum + orderFruitNum;