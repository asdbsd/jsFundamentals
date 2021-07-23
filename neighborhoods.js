function neighborhoods(stringElements) {
    let neighborStreets = stringElements.shift().split(', ');
    let addresses = new Map();

    neighborStreets.forEach( street => addresses.set(street, []));

    for (let string of stringElements) {
        let [address, name] = string.split(' - ');

        if (addresses.has(address)) {
            addresses.get(address).push(name);
        }
        
    }


    Array.from(addresses)
    .sort((a,b) => b[1].length - a[1].length)
    .forEach( street => {
        console.log(`${street[0]}: ${street[1].length}`);
        street[1].forEach( person => console.log(`--${person}`));
    });




}


console.log(
    neighborhoods(
        [
            'Abbey Street, Herald Street, Bright Mews',
            'Bright Mews - Garry',
            'Bright Mews - Andrea',
            'Invalid Street - Tommy',
            'Abbey Street - Billy'
        ]

    )
);