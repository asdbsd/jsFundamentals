function rounding(num, precission) {
    let userPrecision = Number(precission);
    let userNumber = Number(num);

    if (userPrecision > 15) {
        userPrecision = 15;
    } else {
        userPrecision;
    }

    console.log(parseFloat(userNumber.toFixed(userPrecision)));
}

rounding(10.5,3);