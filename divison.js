function division(number) {
    let userNumber = Number(number);
    let lastDevisiableNumber = 0;

    if (userNumber % 2 === 0) {
        lastDevisiableNumber = 2;
    } else {
        lastDevisiableNumber;
    }

    if (userNumber % 3 === 0) {
        lastDevisiableNumber = 3;
    } else {
        lastDevisiableNumber;
    }

    if (userNumber % 6 === 0) {
        lastDevisiableNumber = 6;
    } else {
        lastDevisiableNumber;
    }

    if (userNumber % 7 === 0) {
        lastDevisiableNumber = 7;
    } else {
        lastDevisiableNumber;
    }

    if (userNumber % 10 === 0) {
        lastDevisiableNumber = 10;
    } else {
        lastDevisiableNumber;
    }

    if (lastDevisiableNumber === 0) {
        console.log('Not divisible');
    } else {
        console.log(`The number is divisible by ${lastDevisiableNumber}`);
    }

}


division(1643);

// 2, 3, 6, 7, 10