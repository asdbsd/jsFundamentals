function nonDecreasingSubsequence(numbers) {
    let result = [];
    let currentIndex = 0;

    for (i = 0; i < numbers.length; i++) {
        currentNumber = numbers[i];
        

        if ( i === 0) {
            result.push(currentNumber);
            currentIndex++;
        } else {
            if (currentNumber >= result[currentIndex - 1]) {
                result.push(currentNumber)
                currentIndex++;
            } else {
                continue;
            }
        }
    }

    console.log(result.join(' '));
}

nonDecreasingSubsequence([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubsequence([ 1, 2, 3, 4]);
nonDecreasingSubsequence([ 20, 3, 2, 15, 6, 1]);