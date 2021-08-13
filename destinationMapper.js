function destinationMapper(destinations) {
    let pattern = /(=|\/)([A-Z][A-Za-z]{2,})(\1)/g;
    let result = [];
    let points = 0;

    let match = pattern.exec(destinations);

    while (match !== null) {
        result.push(match[2]);
        points += match[2].length;

        match = pattern.exec(destinations);
    }

    console.log('Destinations: ' + result.join(', '));
    console.log('Travel Points: ' + points);

}


destinationMapper(
    '=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i='
);
console.log('-------------');

destinationMapper(
    'ThisIs some InvalidInput'
) 