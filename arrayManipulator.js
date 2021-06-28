function arrayManipulator(numbersToManipulate, commands) {

    for(let i = 0; i < commands.length; i++) {
        let elements = commands[i].split(' ');
        let command = elements.shift();
        let secondCommand = Number(elements.shift());
        
        
        switch (command) {
            case 'add':
                numbersToManipulate.splice(secondCommand, 0, Number(elements[0]));
                break;
            case 'addMany':
                numbersToManipulate.splice(secondCommand, 0, ...elements); 
                break; 
            case 'contains':
                console.log(numbersToManipulate.indexOf(secondCommand));
                break;
            case 'remove':
                numbersToManipulate.splice(secondCommand, 1);
                break;
            case 'shift':
                for (let z = 0; z < secondCommand; z++) {
                    numbersToManipulate.push(numbersToManipulate.shift());
                }
                break;

            case 'sumPairs':
                let doublesResults = [];
                if(numbersToManipulate.length % 2 !== 0) {
                    numbersToManipulate.push(0);
                }
                for (let y = 0; y < numbersToManipulate.length; y += 2) {
                    let sum = Number(numbersToManipulate[y]) + Number(numbersToManipulate[y + 1]);
                    doublesResults.push(sum);
                }
                numbersToManipulate = doublesResults;
                break;
               
            default: 
                let result = `[ ${numbersToManipulate.map(Number).join(', ')} ]`;
                return result;
                break;
                 
        }

        
       
    }

}

console.log(arrayManipulator(
    [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]
));

console.log('----------------')

console.log(arrayManipulator(
    [1, 2, 4, 5, 6, 7], 
    ['add 1 8', 'contains 1', 'contains 3', 'print']
));

console.log('----------------')

console.log(arrayManipulator(
    [1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
));

