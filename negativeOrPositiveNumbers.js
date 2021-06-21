function negativeOrPositiveNumbers(arr) {
    result = [];

    for(let i = 0; i < arr.length; i++) {
        let current = arr[i];

        current < 0 ? result.unshift(current) : result.push(current);
    }

    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
}

negativeOrPositiveNumbers([7, -2, 8, 9]);
negativeOrPositiveNumbers([3, -2, 0, -1]);