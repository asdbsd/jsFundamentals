function manipulateNumbers(stringElements) {


    let numbersToManipulate = stringElements.shift();

    if(numbersToManipulate.length < 1) {
        console.log(numbersToManipulate);
        return;
    } else {
        numbersToManipulate = numbersToManipulate.split(' ').map(Number);
    }

    for(let action of stringElements) {
        let [command, num1, num2] = action.split(' ');
        num1 = Number(num1);
        num2 = Number(num2);
        
        switch(command) {
            case 'Add':
                addNumber(numbersToManipulate, num1);
                break;
            case 'Remove':
                removeNumber(numbersToManipulate, num1);
                break;
            case 'Replace':
                replaceNumber(numbersToManipulate, num1, num2);
                break;
            case 'Collapse':
                collapseNumber(numbersToManipulate, num1);
                break;
            default: 
                console.log(numbersToManipulate.join(' '));
                return;

        }
    }

    // manipulateNumbers([
    //     "2 5 6 2 5 6 7 7 3 2 23 5",
    //     "Replace 9 10",
    //     "Remove 9",
    //     'Add 25',
    //     'Collapse 1',
    //     'Collapse 9',
    //     'Replace 9 2',
    //     "Finish"
    // ])



    function addNumber(numbers, number1) {
        numbers.push(number1);
    }

    function removeNumber(numbers, number1) {
        if (numbers.indexOf(number1) !== -1) {
            numbers.splice(numbers.indexOf(number1), 1);
        }
    }

    function replaceNumber(numbers, number1, number2) {
        if (numbers.indexOf(number1) !== -1) {
            numbers[numbers.indexOf(number1)] = number2;
        }
    }

    function collapseNumber(numbers, number1) {
        let numbersToRemove = numbers.filter((n) => n < number1);
        if (numbersToRemove.length > 0) {
            numbersToRemove.map((n) => {
                if (numbers.includes(n)) {
                    numbers.map((nn, i) => {
                        if (nn === n) {
                            numbers.splice(i, 1);
                        }
                    } )
                    
                }
            })
        }
    }
}



// manipulateNumbers([
//     "",
//     "Replace 9 10",
//     "Remove 9",
//     'Add 25',
//     'Collapse 1',
//     'Collapse 9',
//     'Replace 9 2',
//     "Finish"
// ])


// manipulateNumbers([
//     "2 5 6 2 5 6 7 7 3 2 23 5",
//     "Replace 9 10",
//     "Remove 9",
//     'Add 25',
//     'Collapse 1',
//     'Collapse 9',
//     'Replace 9 2',
//     "Finish"
// ])

manipulateNumbers(["1 4 5 19",
"Add 1",
"Remove 4",
"Finish"]);
console.log('-----------------')

manipulateNumbers(["1 20 -1 10",
"Collapse 8",
"Finish"])
console.log('-----------------')

manipulateNumbers(["5 9 70 -56 9 9",
"Replace 9 10",
"Remove 9",
"Finish"])

console.log('-----------------')

