function pyramidOfKingDjoser(base, incrementValue) {
    let pyramidWidth = Number(base);
    let pyramidIncrementation = Number(incrementValue);
    let steps = 0;
    let totalStones = 0;
    let totalMarbel = 0;
    let totalLapis = 0;
    let totalGold = 0;
    let currentStonesRequired = 0;
    let currentMarbelRequired = 0;
    let currentLapisRequired = 0;
    let stones = 0;
    let gold = 0;
    let lapis = 0;
    let marbel = 0;
    let totalSteps = 0;

    for (let start = pyramidWidth; start >= 1; start -= 2) {
        steps++;
        let pyramidBase = start - 2;
        if (start === 1 || start === 2) {
            totalGold = start * start;
            gold = totalGold * pyramidIncrementation
            break;
        } else if (steps === 5) {
            currentLapisRequired = (start * start) - (pyramidBase * pyramidBase);
            lapis = currentLapisRequired * pyramidIncrementation;
            currentStonesRequired = pyramidBase * pyramidBase;
            stones = currentStonesRequired * pyramidIncrementation;
            marbel = 0;
            totalSteps += steps;
            steps = 0;
        } else {
            currentStonesRequired = pyramidBase * pyramidBase;
            stones = currentStonesRequired * pyramidIncrementation;
            currentMarbelRequired = (start * start) - currentStonesRequired;
            marbel = currentMarbelRequired * pyramidIncrementation;
            lapis = 0;
        }

        totalStones += stones;
        totalMarbel += marbel;
        totalLapis  += lapis;        
    }

    totalSteps += steps;

    console.log(`Stone required: ${Math.round(totalStones)}`);
    console.log(`Marble required: ${Math.round(totalMarbel)}`);
    console.log(`Lapis Lazuli required: ${Math.round(totalLapis)}`);
    console.log(`Gold required: ${Math.round(totalGold)}`);
    console.log(`Final pyramid height: ${Math.floor(totalSteps * pyramidIncrementation)}`);

}


pyramidOfKingDjoser(11,1);
