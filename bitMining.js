function bitMining(days) {
    let currentDay = 0;
    let bitcoinPrice = 11949.16;
    let goldPrice = 67.51;
    let bitcoinsBought = 0;
    let totalDays = 0;
    let everyThreeDays = 0;
    let moneyLeftover = 0;
    let currentMoneyMade = 0;
    let totalMoneyMade = 0;
    let firstPurchiseDate = 0;

    for (let i = 0; i < days.length; i++) {
        let currentlyDigged = days[i];
        totalDays = i + 1;
        everyThreeDays++;

        if (everyThreeDays === 3) {
            let stolenMoney = (currentlyDigged * goldPrice) * 0.3;
            currentMoneyMade = (currentlyDigged * goldPrice) - stolenMoney;
            everyThreeDays = 0;
        } else {
            currentMoneyMade = (currentlyDigged * goldPrice);
        }

        totalMoneyMade += currentMoneyMade;

        if (totalMoneyMade >= bitcoinPrice) {
            if (firstPurchiseDate === 0) {
                firstPurchiseDate = totalDays;
            }
            for (totalMoneyMade; totalMoneyMade >= bitcoinPrice; totalMoneyMade -= bitcoinPrice) {
                bitcoinsBought++;
            }
            moneyLeftover = totalMoneyMade;
        } else {
            moneyLeftover = totalMoneyMade;
        }

    }



    console.log(`Bought bitcoins: ${bitcoinsBought}`);
    if (bitcoinsBought >= 1) {
        console.log(`Day of the first purchased bitcoin: ${firstPurchiseDate}`);
    }
    console.log(`Left money: ${moneyLeftover.toFixed(2)} lv.`);

}

bitMining([3124.15, 504.212, 2511.124]);