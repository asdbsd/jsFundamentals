function plantDiscovery(stringElements) {
    let catalog = {};
    let numberOfPlants = Number(stringElements.shift());
    let actions = {
        Rate: rate,
        Update: update,
        Reset: reset
    }

    for (let i = 0; i < numberOfPlants; i++) {
        let [name, rarity] = stringElements.shift().split('<->');

        catalog[name] = {
            rarity: Number(rarity),
            ratings: [],
            avgRating: 0,
        };
    }

    while (stringElements[0] !== 'Exhibition') {
        let [command, line] = stringElements.shift().split(': ');
        let action = actions[command];
        action(line);

    }
    let sorted = Object.entries(catalog).sort(comparePlants);

    console.log('Plants for the exhibition:');
    for( let [name, plant] of sorted) {
        console.log(`- ${name}; Rarity: ${plant.rarity}; Rating: ${plant.avgRating.toFixed(2)}`);
    }



    function rate(line) {
        let [plant, rating] = line.split(' - ');
        if (catalog[plant] !== undefined) {
            catalog[plant].ratings.push(Number(rating));

            let totalRating = 0;
            for (let rating of catalog[plant].ratings ) {
                totalRating += rating;
            }
            catalog[plant].avgRating = totalRating / catalog[plant].ratings.length;
        } else {
            console.log('error');
        }


    }

    

    function update(line) {
        let [plant, rarity] = line.split(' - ');
        if (catalog[plant] !== undefined) {
            catalog[plant].rarity = Number(rarity);
        } else {
            console.log('error');
        }
        
    }

    function reset(line) {
        let plant = line;
        if (catalog[plant] !== undefined) {
            catalog[plant].ratings.length = 0;
            catalog[plant].avgRating = 0;
        } else {
            console.log('error');
        }
        
        
    }

    function comparePlants(a,b) {
        let rarityA = a[1].rarity;
        let rarityB = b[1].rarity;

        let ratingA = a[1].avgRating;
        let ratingB = b[1].avgRating;

        return  (rarityB - rarityA) || (ratingB - ratingA);
    }
    
}

plantDiscovery(
    [
        '3',
        'Arnoldii<->4',
        'Woodii<->7',
        'Welwitschia<->2',
        'Rate: Woodii - 10',
        'Rate: Welwitschia - 7',
        'Rate: Arnoldii - 3',
        'Rate: Woodii - 5',
        'Update: Woodii - 5',
        'Reset: Arnoldii',
        'Exhibition'
    ]
);
console.log('---------------')

plantDiscovery(
    [
        '2',
        'Candelabra<->10',
        'Oahu<->10',
        'Rate: Oahu - 7',
        'Rate: Candelabra - 6',
        'Exhibition'
    ]
);