function storage(stringElements) {
    let inventory = new Map();

    for (let product of stringElements) {
        let [item, qty] = product.split(' ');

        if (inventory.has(item)) {
            inventory.set(item, Number(qty) + inventory.get(item));
        } else {
            inventory.set(item, Number(qty));
        }
    }

    let result = [];
    inventory.forEach( (value, key) => {
        result.push(`${key} -> ${value}`);
    });

    return result.join('\n');
}

console.log(
    storage(
        [
            'tomatoes 10',
            'coffee 5',
            'olives 100',
            'coffee 40'
        ]

    )
);