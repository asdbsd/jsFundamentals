function perfectNumber(number) {
    let divisors = [];
    let sum = 0;

    for(let i = 1; i < number; i++) {
        if (number % i === 0) {
            divisors.push(i);
        }
    }

    for (let i = 0; i < divisors.length; i++) {
        sum += divisors[i];
    }

    if(sum === number) {
        return 'We have a perfect number!'
    } else {
        return "It's not so perfect."
    }
}

console.log(perfectNumber(6));
console.log(perfectNumber(28));
console.log(perfectNumber(1236498));