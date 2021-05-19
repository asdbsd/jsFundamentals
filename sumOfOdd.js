function sumOfOdd(num) {
    let sum = 0;
    let number = 1;


    for (let summedTimes = 0; summedTimes < Number(num);) {
        if (number % 2 != 0) {
            console.log(number);
            summedTimes++;
            sum += number;
        }
        number++;
    }

    console.log(`Sum: ${sum}`);
}

sumOfOdd(3);