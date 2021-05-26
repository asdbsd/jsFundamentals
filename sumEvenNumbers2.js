function sumEvenNumbers2 (numbersCollection) {
    let sum = 0;
    for (let i = 0; i < numbersCollection.length; i++) {
        let currentNumber = Number(numbersCollection[i]);
        sum += currentNumber % 2 === 0 ? currentNumber : 0;        
    }

    console.log(sum);
}

sumEvenNumbers2(['2','4','6','8','10']);