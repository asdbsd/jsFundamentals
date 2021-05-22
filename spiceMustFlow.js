function spiceMustFlow(theYield) {
    let daysWorked = 0;
    let spiceLeftover = 0;
    let extratedSpices = 0;

    if (theYield >= 100) {
        for (let i = theYield; i >= 100;) {
            daysWorked++;
            spiceLeftover = i - 26;
            extratedSpices += spiceLeftover;
            i -=  10;
        }

        if (extratedSpices >= 26) {
            extratedSpices -= 26;
        }


    } else {
        daysWorked = 0;
        extratedSpices = 0;
    }

    console.log(daysWorked);
    console.log(extratedSpices);
}


spiceMustFlow(100);
