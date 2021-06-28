function buildWall (sides) {
    let dailyConcreteUsed = [];
    let totalExpenses = 0;



    for (let i = Math.min(...sides); i < 30; i++) {
        let dailySum = 0;

        for (let y = 0; y < sides.length; y++) {

            if (sides[y] < 30) {
                dailySum += 195;
                sides[y]++;
            } else {
                dailySum;
            }

        }

        totalExpenses += dailySum * 1900;
        dailyConcreteUsed.push(dailySum);
    }

    let result = `${dailyConcreteUsed.join(', ')}\n${totalExpenses} pesos`;

    return result;
     
}

console.log(buildWall([21, 25, 28]));