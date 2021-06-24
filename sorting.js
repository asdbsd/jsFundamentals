function sorting (numbers) {
    let numbersLength = numbers.length;

    let result = [];

    for (let i = 0; i < numbersLength; i++) {
        if (i % 2 == 0) {
            numbers.sort((a, b) => b - a);
            result.push(numbers.shift());
        } else {
            numbers.sort((a, b) => a - b);
            result.push(numbers.shift());
        }
    }

    console.log(result.join(' '))
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);

