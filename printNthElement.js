function printNthElement(collection) {
    result = [];

    for(i = 0; i < collection.length - 1; i += Number(collection[collection.length - 1])) {
        result.push(collection[i]);
    }

    console.log(result.join(' '));
}

printNthElement(['5', '20', '31', '4', '20', '2']);
console.log('-----------------');
printNthElement(['dsa', 'asd', 'test', 'test', '2']);
console.log('-----------------');
printNthElement(['1', '2', '3', '4', '5', '6']);
