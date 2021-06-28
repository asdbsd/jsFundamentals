function gladiatorInventory(stringElements) {
    let inventory = stringElements.shift().split(' ');
    
    for(let element of stringElements) {
        let [command, item] = element.split(' ');
        let exists = inventory.includes(item);
        
        switch(command) {
            case 'Buy':
                if (!exists) {
                    inventory.push(item);
                }
            break;
                
            case 'Trash':
                if (exists) {
                    inventory.splice(inventory.indexOf(item), 1);
                }
                break;

            case 'Repair':
                if (exists) {
                    inventory.push(inventory.splice(inventory.indexOf(item), 1))
                }
                break;

            default: 
                let [armor, upgrade] = item.split('-');
                if (inventory.includes(armor)) {
                    let originalArmorLocation = inventory.indexOf(armor) + 1;
                    inventory.splice(originalArmorLocation, 0, (armor + ':' + upgrade));
                }
                break;
        }
    }

    return inventory.join(' ');
}

console.log(gladiatorInventory([
    'SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'
]));