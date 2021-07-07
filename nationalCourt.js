function nationalCourt(elements) {
    let numberElements = elements.map(Number);
    let efficiencyPerHour = numberElements[0] + numberElements[1] + numberElements[2];
    let customersCount = numberElements[3];
    let timeNeeded = 0;
    
    while(customersCount > 0) {
        timeNeeded++;
        if ( timeNeeded % 4 !== 0) {
            customersCount -= efficiencyPerHour;
        }
    }

    console.log(`Time needed: ${timeNeeded}h.`)

}


nationalCourt(
    [
        '5', '6', '4', '20'
    ]
)

    nationalCourt(
        [
            '1', '2', '3', '45'
        ]
)

nationalCourt(
    [
        '1', '1', '1', '0'
    ]
)