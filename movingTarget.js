function movingTarget(stringElements) {
    let targets = stringElements.shift().split(' ').map(Number);

    for(let action of stringElements) {
        let [command, index, value] = action.split(' ');
        if (command === 'End') {
            return targets.join('|');
        } else if (command === 'Shoot') {
            shootTarget(targets, Number(index), Number(value));
        } else if (command === 'Add') {
            addTarget(targets, Number(index), Number(value));
        } else {
            strikeTarget(targets, Number(index), Number(value));
        }
    }


    function shootTarget(targets, index, power) {
        if (targets[index]) {
            if (targets[index] - power <= 0) {
                targets.splice(index, 1);
            } else {
                targets[index] -= power;
            }
        }
    }

    function addTarget(targets, index, value) {
        if (targets[index]) {
            targets.splice(index, 0, value);
        } else {
            console.log('Invalid placement!');
        }
    }

    function strikeTarget(targets, index, radius) {
        let radiusStartIndex = index - radius;
        let radiusEndIndex = index + radius;
        if (!(radiusStartIndex < 0) && !(radiusEndIndex > targets.length - 1)) {
            targets.splice(radiusStartIndex, 1 + (2 * radius));
        } else {
            console.log('Strike missed!');
        }
    }


}


console.log(movingTarget([
    "52 74 23 44 96 110",
    "Strike 4 1",
    "End"
]));
// console.log('---------------')

console.log(movingTarget([
    "52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"
]));
// console.log('---------------')

// console.log(movingTarget([
//     "1 2 3 4 5",
//     "Strike 0 1",
//     "End"
// ]));

