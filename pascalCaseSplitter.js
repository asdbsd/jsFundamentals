function pascalCaseSplitter(stringElement) {
    let result = [];
    let upperIndex = 0;

    for (let i = 1; i < stringElement.length; i++) {
        if (stringElement[i] === stringElement[i].toUpperCase()) {
            let word = stringElement.substring(upperIndex, i)
            result.push(word);
            upperIndex = i;
        }
    }
    result.push(stringElement.substring(upperIndex));

    console.log(result.join(', '))

}

pascalCaseSplitter(
    'SplitMeIfYouCanHaHaYouCantOrYouCan'
)
console.log('--------------')

pascalCaseSplitter(
    'HoldTheDoor'
)
console.log('--------------')

pascalCaseSplitter(
    'ThisIsSoAnnoyingToDo'
)