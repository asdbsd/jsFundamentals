function muOnline (rooms) {
    let dungeonRooms = rooms.split('|');
    let bestRoom = 0;
    let totalBitcoins = 0;
    let initialHp = 100;


    for(let room of dungeonRooms) {
        let [content, amount] = room.split(' ');
        bestRoom++;

        switch(content) {
            case 'potion':
                if (initialHp >= 100) {
                    console.log(`You healed for 0 hp.`)
                } else {
                    if (initialHp + Number(amount) >= 100) {
                        let addedHealth = 100 % initialHp;
                        initialHp += addedHealth;
                        console.log(`You healed for ${addedHealth} hp.`)
                    } else {
                        initialHp += Number(amount);
                        console.log(`You healed for ${Number(amount)} hp.`)
                    }
                    
                }
                console.log(`Current health: ${initialHp} hp.`)
                break;

            case 'chest':
                totalBitcoins += Number(amount);
                console.log(`You found ${amount} bitcoins.`);
                break;

            default:
                initialHp -= Number(amount);
                if (initialHp <= 0) {
                    initialHp = 0;
                    console.log(`You died! Killed by ${content}.`);
                    console.log(`Best room: ${bestRoom}`);
                    return;
                } else {
                    console.log(`You slayed ${content}.`);
                }
                break;
        }

    }

    console.log("You've made it!");
    console.log(`Bitcoins: ${totalBitcoins}`)
    console.log(`Health: ${initialHp}`)
}

muOnline(
    'rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000'
)
console.log('--------------------------')
muOnline('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110');
console.log('--------------------------')
muOnline('potion 30');


