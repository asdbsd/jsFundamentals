function lastNumbersSequence (sequence, numberForSum) {
    let result = [1];

    for (let i = 1; i < sequence; i++) {
        let currentCollection = result.slice(-numberForSum);
        let currentSum = 0;
        for (let element of currentCollection) {
            currentSum += element;   
        }

        result.push(currentSum);

        
        

    }
    return result.join(' ');
}

lastNumbersSequence(6,3);
lastNumbersSequence(8,2);