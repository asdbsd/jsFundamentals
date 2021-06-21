function charactersInRange(char1, char2) {
    let charactersBetween = [];
    let result = '';

    let firstCharPosition = char1.charCodeAt();
    let secondCharPosition = char2.charCodeAt();

    function printCharacters(num1, num2) {
        for (i = num1; i < num2 - 1; i++) {
            charactersBetween.push(String.fromCharCode(i + 1));
        }
        result = charactersBetween.join(' ')
    }
    
    
    if (firstCharPosition > secondCharPosition) {
        printCharacters(secondCharPosition, firstCharPosition);
    } else {
        printCharacters(firstCharPosition, secondCharPosition);
    }

    return result;


}

console.log(charactersInRange('C', '#'));