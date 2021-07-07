function arrayModifier(elements) {
    let numbers = elements.shift().split(' ').map(Number);
    let actions = [];
    elements.map((e) => actions.push(e));


    // Going troight actions performing action function
    for (let action of actions) {
        let [command, index1, index2] = elements.shift().split(' ');
        let i1 = Number(index1);
        let i2 = Number(index2);
        if (command === 'swap') {
            swapNumbers(numbers, i1, i2);
        } else if (command === 'multiply') {
            multiplyNumbers(numbers, i1, i2);
        } else if (command === 'decrease') {
            decreaseNumbers(numbers);
        }
    }

    return numbers.join(', ');

    // Action functions
    function swapNumbers(numbers, index1, index2) {

        let firstElement = numbers.splice(index1, 1)[0];
        let secondElement = 0;

        if (index1 > index2) {
            secondElement = numbers.splice(index2, 1)[0];
            numbers.splice(index2, 0, firstElement);
            numbers.splice(index1, 0, secondElement);
        } else {
            secondElement = numbers.splice(index2 - 1, 1)[0];
            numbers.splice(index1, 0, secondElement);
            numbers.splice(index2, 0, firstElement);
        }

        return numbers;
    }

    function multiplyNumbers(numbers, index1, index2) {
        let newElement = 0;
        if (index1 > index2) {
            newElement = numbers.splice(index1, 1)[0] * numbers[index2];
        } else {
            newElement = numbers.splice(index1, 1)[0] * numbers[index2 - 1];
        }
        
        numbers.splice(index1, 0, newElement);

        return numbers;
    }

    function decreaseNumbers(numbers) {
       newNumbers = numbers.map((number, i) => numbers.splice(i, 0, numbers.splice(i, 1)[0] - 1));

       return numbers;
    }

}


console.log(arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]));

console.log('---------------------')
console.log(arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  
]));