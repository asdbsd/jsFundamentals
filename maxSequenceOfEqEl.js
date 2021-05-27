function maxSequenceOfEqEl(elements) {
    let currentNumEq = 0;
    let currentTimesEq = 0;

    for (let i = 0; i < elements.length; i++) {
        let eqNumber = 0;
        let eqTimes = 1;

        for (let j = i + 1; j < elements.length; j++) {
            if (elements[i] !== elements[j]) {
                break;
            } else {
                eqTimes++;
                eqNumber = elements[i];
            }
            if (eqTimes > currentTimesEq) {
                currentTimesEq = eqTimes;
                currentNumEq = elements[j];
            }
        }
    }

    let sequenceOfNumbers = [];

    for (i = 0; i < currentTimesEq; i++) {
        sequenceOfNumbers.push(currentNumEq);
    }
    

    

    console.log(sequenceOfNumbers.join(' '));

}

maxSequenceOfEqEl([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqEl([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEqEl([4, 4, 4, 4]);
maxSequenceOfEqEl([0, 1, 1, 5, 2, 2, 6, 3, 3]);