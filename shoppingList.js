function shoppingList(elements) {
    let groceries = elements.shift().split('!');

    for(let e of elements) {
        let [command, product, newProduct] = e.split(' ');

        switch(command) {
            case 'Urgent':
                if (!groceries.includes(product)) {
                    groceries.unshift(product);
                }
                break;
            case 'Unnecessary':
                if (groceries.includes(product)) {
                    groceries.splice(groceries.indexOf(product), 1);
                }
                break;
            case 'Correct':
                if (groceries.includes(product)) {
                    currentProductIndex = groceries.indexOf(product);
                    groceries[currentProductIndex] = newProduct;
                }
                break;
            case 'Rearrange':
                if (groceries.includes(product)) {
                    currentProductIndex = groceries.indexOf(product);
                    groceries.push(groceries.splice(groceries.indexOf(product), 1));
                }
                break;
            default: 
                return groceries.join(', ')
                break;
                
        }

    }

}

console.log(shoppingList(
    [
        'Tomatoes!Potatoes!Bread',
        'Unnecessary Milk',
        'Urgent Tomatoes',
        'Go Shopping!'
    ]
));

console.log(shoppingList(
    [
        'Milk!Pepper!Salt!Water!Banana',
        'Urgent Salt',
        'Unnecessary Grapes ',
        'Correct Pepper Onion',
        'Rearrange Grapes',
        'Correct Tomatoes Potatoes',
        'Go Shopping!'
    ]
));

