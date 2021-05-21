function poundsToDollars(pound) {
    let exchangeToUsd = 1.31;
    let exchangeAmount = Number(pound);
    let result = (exchangeAmount * exchangeToUsd).toFixed(3);

    console.log(result);
}

poundsToDollars(80)