function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let result = 0;
    let trashedHelmetCount = 0;
    let trashedSwordCount = 0;
    let trashedShieldCount = 0;
    let trashedArmorCount = 0;

    for (let i = 1; i < lostFights + 1; i++) {
        let brokenHelmet = false;
        let brokenSword = false;

        if (i % 2 === 0) {
            trashedHelmetCount++;
            brokenHelmet = true;
        }

        if (i % 3 === 0) {
            trashedSwordCount++;
            brokenSword = true;
        }

        if (brokenHelmet && brokenSword){        
            trashedShieldCount++;
        }

    }

    for (let i = 1; i < trashedShieldCount + 1; i++) {
        if ( i % 2 === 0) {
            trashedArmorCount++;
        }
    }

    result = (trashedHelmetCount * helmetPrice) + (trashedSwordCount * swordPrice) + (trashedShieldCount * shieldPrice) + (trashedArmorCount * armorPrice);

    
    console.log(`Gladiator expenses: ${result.toFixed(2)} aureus`);


}





gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200
    );