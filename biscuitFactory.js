function biscuitFactory(stringElements) {
    let qtyPerWorkerPerDay = Number(stringElements.shift());
    let workers = Number(stringElements.shift());
    let otherQtyPerThirthyDays = Number(stringElements.shift());

    let biscuitsProduced = 0;

    for (let i = 1; i < 31; i++) {
        let dailyProduction = 0;
        if (i % 3 === 0) {
            dailyProduction += workers * qtyPerWorkerPerDay;
            biscuitsProduced += Number(Math.floor(dailyProduction * 0.75).toFixed(2));
        } else {
            dailyProduction += workers * qtyPerWorkerPerDay;
            biscuitsProduced += Number(Math.floor(dailyProduction).toFixed(2));
        }
    }

    let productionDifference = biscuitsProduced - otherQtyPerThirthyDays;

    console.log(`You have produced ${biscuitsProduced} biscuits for the past month.`)
    if (productionDifference < 0) {
        console.log(`You produce ${Math.abs((productionDifference/otherQtyPerThirthyDays * 100)).toFixed(2)} percent less biscuits.`)

    } else {
        console.log(`You produce ${(productionDifference/otherQtyPerThirthyDays * 100).toFixed(2)} percent more biscuits.`)

    }


}

// biscuitFactory(["78", "8", "16000"]);
// biscuitFactory(["65", "12", "26000"])
// biscuitFactory(["163", "16", "67020"]);
biscuitFactory(['65', '12', '26000']);

