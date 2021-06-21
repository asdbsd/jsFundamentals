function palindromeIntegers(numbers) {

    let result = [];
    
    for (let i = 0; i < numbers.length; i++) {
        currentNumber = numbers[i] + '';
        reversedNumber = reverseNumber(currentNumber);

        if (currentNumber === reversedNumber) {
            result.push(true);
        } else {
            result.push(false);
        }

    }

    return result.join('\n');

    function reverseNumber(number) {
        let reversedString = '';
        for (let i = number.length; i > 0; i--) {
            reversedString += number[i -1];
        }
        return reversedString;
    }

}

console.log(palindromeIntegers([123,323,421,121]));
console.log(palindromeIntegers([32,2,232,1010]));