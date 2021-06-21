function train(input) {
    let completeTrain = input.shift().split(' ').map((wagon) => Number(wagon));
    let maxCapacity = Number(input.shift());



    for (let command of input) {
        let tokens = command.split(' ');

        switch (tokens[0]) {
            case 'Add':
                completeTrain.push(Number(tokens[1]));
                break;
            default   :
                for(wagon of completeTrain) {
                    if (wagon + Number(tokens[0]) <= maxCapacity) {
                        let position = completeTrain.indexOf(wagon);
                        completeTrain[position] += Number(tokens[0]);
                        break;
                    }
                } 
                break;
        }

    }
    return completeTrain.join(' ');

}

console.log(train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
));

console.log(train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
));

