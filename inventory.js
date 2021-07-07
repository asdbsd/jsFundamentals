function inventory(elements) {
    let inventory = elements.shift().split(', ');

    for (let action of elements) {
        let [command, item] = action.split(' - ');

        switch(command) {
            default: return console.log(inventory.join(', '));
            
            case 'Collect':
                collectItem(inventory, item);
                break;
            
            case 'Drop': 
                dropItem(inventory, item);
                break;
            
            case 'Combine Items':
                let [searchItem, newItem] = item.split(':');
                combineItems(inventory, searchItem, newItem);
                break;

            case 'Renew':
                renewItem(inventory, item);
                break;
        }
    }

    function collectItem(inventory, item) {
        if (inventory.includes(item)) {
            return inventory;
        } else {
            inventory.push(item);
            return inventory;
        }
    }

    function dropItem(inventory, item) {
        if (inventory.includes(item)) {
            inventory.splice(inventory.indexOf(item), 1);
            return inventory;
        } else {
            return inventory;
        }
    }

    function combineItems(inventory, searchItem, newItem) {
        if (inventory.includes(searchItem)) {
            let newItemIndex = inventory.indexOf(searchItem) + 1;
            inventory.splice(newItemIndex, 0, newItem);
            return inventory;
        } else {
            return inventory;
        }
    }

    function renewItem(inventory, item) {
        if (inventory.includes(item)) {
            inventory.push(inventory.splice(inventory.indexOf(item), 1)[0]);
            return inventory;
        } else {
            return inventory;
        }
    }


}


inventory([ 'Iron, Wood, Sword','Combine Items - Wood:Axe', 'Renew - Axe', 'Collect - Gold', 'Drop - Wood', 'Craft!' ]);
console.log('---------------------')
// inventory([
//     'Iron, Sword',
//     'Drop - Bronze',
//     'Combine Items - Sword:Bow',
//     'Renew - Iron',
//     'Craft!'
//   ]
// );
// console.log('---------------------')