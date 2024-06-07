const cart = {
    items: [],
    getItems() {
    console.log(this.items)
    },
    add(product) {
    this.items.push(product)
    },
    remove(productName) {
    let index;
    for (const item of this.items){
    if (item.name === productName){
    index = this.items.indexOf(item);
    this.items.splice(index, 1);
    }
    }
    return this.items;
    },
    clear() {},
    countTotalPrice() {},
    increaseQuantity(productName) {},
    decreaseQuantity(productName) {},
    };
    cart.add({ name: '🍎', price: 50 });
    cart.add({ name: '🍇', price: 70 });
    cart.add({ name: '🍋', price: 60 });
    cart.add({ name: '🍓', price: 110 });
    console.log(cart);
    console.log(cart.getItems());
    console.log(cart.remove('🍎'));
    console.log(cart.remove('🍋'));



const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
    ];

    const playerIdToUpdate = 'player-4';
    const updatedPlayers = players.map((player)=>{

        if (player.id === playerIdToUpdate) {
            return {
                ...player,
                timePlayed: player.timePlayed + 100
            }
            
        } else {
            return {
                ...player
            }
        }
        
        
    })
console.log(updatedPlayers)
  

    // console.table(players);
