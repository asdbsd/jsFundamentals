function biggestThreeNumbers(num1, num2, num3) {
    let numbers = [num1, num2, num3];
    let result = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > result) {
            result = numbers[i];
        }
    }

    console.log(result);
}

biggestThreeNumbers(43,
    43.2,
    43.1
    )