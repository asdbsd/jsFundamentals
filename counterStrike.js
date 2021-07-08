function counterStrike(elements) {
    let energy = Number(elements.shift());
    let wonBattles = 0;

    for (let distance of elements) {

        if (distance === 'End of battle') {
            return `Won battles: ${wonBattles}. Energy left: ${energy}`;
        }

        if (energy < Number(distance)) {
            return `Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`
        } else {
            wonBattles++;
            if (wonBattles % 3 === 0) {
                energy += wonBattles;
                energy -= Number(distance);
            } else {
                energy -= Number(distance);
            }
        }
    }

    return `Won battles: ${wonBattles}. Energy left: ${energy}`

}

console.log(counterStrike([
    "1",
    "1",
    "10",
    "10",
    "1",
    "2",
    "3",
    "2",
    "10"
]));

// console.log('--------------------')

// console.log(counterStrike([
//     "200",
//     "54",
//     "14",
//     "28",
//     "13",
//     "End of battle"
// ]))