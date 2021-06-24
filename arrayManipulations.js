function arrayManipulations(elements) {
    let numbersToManipulate = elements.shift().split(' ').map((e) => Number(e));

    for (let i = 0; i < elements.length; i++) {
        let [command, firstNum, secondNum] = elements[i].split(' ');
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);
        
        switch (command) {
            case 'Remove': numbersToManipulate = numbersToManipulate.filter(el => el !== firstNum); break; 

            case 'RemoveAt': numbersToManipulate.splice(firstNum, 1); break;

            case 'Insert': numbersToManipulate.splice(secondNum, 0, firstNum); break;

            default: numbersToManipulate.push(firstNum); break;
        }
        
    }

    return numbersToManipulate.join(' ');
}

console.log(arrayManipulations(['4 19 2 53 6 43',
                    'Add 3',
                    'Remove 2',
                    'RemoveAt 1',
                    'Insert 8 3']
));