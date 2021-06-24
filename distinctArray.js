function distinctArray(numbers) {
    let numbersLength = numbers.length;
    let result = [];
    for (let i = 0; i < numbersLength; i++) {
        if(!result.includes(numbers[i])) {
            result.push(numbers[i]);
        } else {
            continue;
        }
        
    }
    return result.join(' ');
}

// distinctArray([1,2,3,4]);
distinctArray([7,8,9,7,2,3,4,1,2]);
// distinctArray([20,8,12,13,4,4,8,5]);