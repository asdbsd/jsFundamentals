function dungeonestDark(rooms) {
    roomsArray = rooms.toString().split('|');
    let initialHealth = 100;
    let initialCoins = 0;

    for (i = 0; i < roomsArray.length; i++) {
        let obsticleAndAmount = roomsArray[i].split(' ');
        switch (obsticleAndAmount[0]) {

            case 'potion':
                if (initialHealth + Number(obsticleAndAmount[1]) >= 100) {
                
                    console.log(`You healed for ${100 - initialHealth} hp.`);
                    initialHealth = 100;
                    console.log(`Current health: ${initialHealth} hp.`);
                    
                } else {
                    console.log(`You healed for ${obsticleAndAmount[1]} hp.`);
                    initialHealth += Number(obsticleAndAmount[1]);
                    console.log(`Current health: ${initialHealth} hp.`);
                    
                }
                break;

            case 'chest':
                initialCoins += Number(obsticleAndAmount[1]);
                console.log(`You found ${obsticleAndAmount[1]} coins.`);
                break;
            default: 
                initialHealth -= Number(obsticleAndAmount[1]);
                if (initialHealth > 0) {
                    console.log(`You slayed ${obsticleAndAmount[0]}.`);
                } else {
                    console.log(`You died! Killed by ${obsticleAndAmount[0]}.`);
                    console.log(`Best room: ${i + 1}`);
                    return;
                }
                break;
        }

        if (i + 1 >= roomsArray.length ) {
            console.log(`You've made it!`);
            console.log(`Coins: ${initialCoins}`);
            console.log(`Health: ${initialHealth}`);
        }
    }


}

// dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
// dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])