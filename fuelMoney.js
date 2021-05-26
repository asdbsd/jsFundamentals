function fuelMoney(distanceToTravel, passengerQty, fuelPrice) {
    let neededFuel = (distanceToTravel / 100) * 7;
    neededFuel += passengerQty * 0.100;

    let moneyNeeded = neededFuel * fuelPrice;

    console.log(`Needed money for that trip is ${moneyNeeded}lv.`);

}

fuelMoney(260, 9, 2.49)