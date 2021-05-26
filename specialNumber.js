function specialNumber(number) {


    
    for(let i = 0; i < number; i++) {
        let sum = 0;
        let currentNumber = i + 1;
        let aNumber = currentNumber.toString();

        for(let j = 0; j < aNumber.length; j++) {
            sum += Number(aNumber[j]);
        }

        let result = sum === 5 || sum === 7 || sum === 11 ? 'True' : 'False';

        console.log(`${currentNumber} -> ${result} `);

    }
}

specialNumber(15);