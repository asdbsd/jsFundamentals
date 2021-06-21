function oddAndEvenSum(digits) {
    let allNumbers = [];
    digits += '';
    for (i = 0; i < digits.length; i++) {
        allNumbers.push(digits[i]);
    }
  
    evenSum = 0;
    oddSum = 0;

    for (i = 0; i < allNumbers.length; i++) {
        if (Number(allNumbers[i]) % 2 === 0) {
            evenSum += Number(allNumbers[i]);
        } else {
            oddSum += Number(allNumbers[i]);
        }
    }

    return 'Odd sum = ' + oddSum + ', Even sum = ' + evenSum;
}

console.log(oddAndEvenSum(1000435));
console.log(oddAndEvenSum(3495892137259234));