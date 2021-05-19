function multiplicationTable(num) {

    let numberToMultiply = Number(num);
    for (let n = 1; n < 11; n++) {
        let resultInString = numberToMultiply + " X " + n + " = " + `${numberToMultiply * n}`;
        console.log(resultInString);
    }
}

multiplicationTable(5);