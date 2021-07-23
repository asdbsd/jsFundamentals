function piccolo(stringElements) {

    let parking = {};

    stringElements
    .forEach( element => {
        let [status, numberPlate] = element.split(', ');
        parking[numberPlate] = status;        
    });

    let result = [];
    Array.from(Object.entries(parking))
    .filter( e => e[1] === 'IN')
    .sort( (x, y) => x[0].localeCompare(y[0]) )
    .forEach( arr => result.push(arr[0]) );

    if (result.length < 1) {
        return 'Parking Lot is Empty';
    } else {
        return result.join('\n');

    }

}

console.log(piccolo(
    [
        'IN, CA2844AA',
        'IN, CA1234TA',
        'OUT, CA2844AA',
        'IN, CA9999TT',
        'IN, CA2866HI',
        'OUT, CA1234TA',
        'IN, CA2844AA',
        'OUT, CA2866HI',
        'IN, CA9876HH',
        'IN, CA2822UU'
    ]
));
console.log('------------------------')

console.log(piccolo(
    [
        'IN, CA2844AA',
        'IN, CA1234TA',
        'OUT, CA2844AA',
        'OUT, CA1234TA'
    ]
));