function bombNumbers (numbers, bomb) {
    let sum = 0;

    while(numbers.indexOf(bomb[0]) !== -1){
        let startIndex = 0;
        if (numbers.indexOf(bomb[0]) - bomb[1] < 0) {
            startIndex = 0;
        } else {
            startIndex = numbers.indexOf(bomb[0]) - bomb[1];
        }

        numbers.splice(startIndex, bomb[1] * 2 + 1);
    }

    numbers.map((el) => sum += el);

    return sum;
}

// console.log(bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]));
// console.log('------------------')
// console.log(bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]));
// console.log('------------------')
console.log(bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]));
console.log('------------------')
// console.log(bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]));