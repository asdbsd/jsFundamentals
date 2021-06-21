function mathPower (number, power) {
    let result = number;
    for (let i = 0; i < power - 1; i++) {
        result *= number;
    }

    console.log(result);
}

mathPower(2,8);
mathPower(3,4);

