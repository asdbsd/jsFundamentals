function evenAndOddSubstraction(numbers) {
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < numbers.length; i++) {
        numbers[i] % 2 === 0 ? evenSum += numbers[i] : oddSum += numbers[i];
    }
    console.log(evenSum - oddSum);
}

evenAndOddSubstraction([2,4,6,8,10]);