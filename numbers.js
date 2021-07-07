function numbers(numbersString) {
    let numbers = numbersString.split(' ').map(Number);
    let sum = 0;
    numbers.map((n) => sum += n);
    let averageNumber = (sum / numbers.length).toFixed(2);

    let higherThanAverageNumbers = numbers.filter((e) => e > Number(averageNumber)).sort((a,b) => b - a);
    let topNumbers = higherThanAverageNumbers.filter((n, i) => i < 5);


    if (higherThanAverageNumbers.length > 0) {
        return topNumbers.join(' ');
    } else {
        return 'No';
    }
}


console.log(numbers('10 20 30 40 50'));
console.log(numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51'));
console.log(numbers('1'));
console.log(numbers('-1 -2 -3 -4 -5 -6'));
console.log(numbers('1 3'));
