function maxNumber(numbers) {
    let topNumbers = [];

    for(let i = 0; i < numbers.length; i++) {
        let isTop = true;
        
        for (let j = i+1; j < numbers.length; j++) {
            if (numbers[j] >= numbers[i]) {
                isTop = false;
                break;
            }
        }

        isTop === true ? topNumbers.push(numbers[i]) : topNumbers;


    }

    console.log(topNumbers.join(' '));
}

maxNumber([1, 4, 3, 2])
maxNumber([14, 24, 3, 19, 15, 17])