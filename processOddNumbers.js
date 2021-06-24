function processOddNumbers (numbers) {
    let oddNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if (i % 2 !== 0) {
            oddNumbers.push(numbers[i] * 2)
        } else {
            continue;
        }
    }
    return oddNumbers.reverse().join(' ');
}

console.log(processOddNumbers([10, 15, 20, 25]));
console.log(processOddNumbers([3, 0, 10, 4, 7, 3]));