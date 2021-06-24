function searchNumber(numbersToManipulate, actionNumbers) {
    let result = [];
    let occurance = 0;
    let stringToReturn = '';

    let [elementsToTake, elementsToRemove, numberToSearch] = actionNumbers;
    let out = numbersToManipulate.slice(0,elementsToTake);
    out.map((el) => result.push(el));
    result.splice(0, elementsToRemove);
    
    result.map((el) => el === numberToSearch ? occurance++ : el);

    stringToReturn += `Number ${numberToSearch} occurs ${occurance} times.`;

    return stringToReturn;
    
}


console.log(searchNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]))