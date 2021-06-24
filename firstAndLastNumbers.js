function firstAndLastNumbers (input) {
    let numberOfElements = input.shift();

    
    let firstX = input.slice(0, numberOfElements);
    console.log(firstX.join(' '))
    let lastX = input.slice(input.length - numberOfElements);
    console.log(lastX.join(' '))
}

firstAndLastNumbers([2, 7,8,9])