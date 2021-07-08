function theLift(stringElements) {
    let  tourists = Number(stringElements.shift());
    let lift = stringElements.shift().split(' ').map(Number);

    for (let i = 0; i < lift.length; i++) {
        if (lift[i] === 0) {
            if (tourists > 3) {
                lift[i] += 4;
                tourists -= 4;
            } else {
                lift[i] += tourists;
                tourists -= tourists;
            }
        } else if (lift[i] < 4) {
            let availableSpace = 4 - lift[i];
            lift[i] += availableSpace;
            tourists -= availableSpace;
        }

        if (tourists < 1) {
            break;
        }
    }

    let remainingSpaces = lift.filter((e) => e < 4);

    if (remainingSpaces.length < 1) {
        if (tourists > 0) {
            console.log(`There isn't enough space! ${tourists} people in a queue!`);
            console.log(lift.join(' '));
        } else {
            console.log(lift.join(' '));
        }
    } else {
        console.log('The lift has empty spots!');
        console.log(lift.join(' '));
    }

}

theLift([
    "15",
    "0 0 0 0 0"
]);

console.log('---------------')

theLift([
    "10",
    "0 2 0"
]);