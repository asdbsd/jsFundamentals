function replaceRepeatingChars(stringElement) {
    // let stringElements = stringElement.split('');
    // let result = '';

    // for (let i = 0; i < stringElements.length; i++) {
    //     let currentElement = stringElements[i];
    //     result += currentElement;

    //     while (stringElement[i] === currentElement) {
    //         i++;
    //     }
    //     i--;
    // }

    let result = '';
    for (let char of stringElement) {
        
        if (char !== result[result.length - 1]) {
            result += char;
        }
    }

    console.log(result)


}

replaceRepeatingChars(
    'aaaaabbbbbcdddeeeedssaa'
);
console.log('---------------');

replaceRepeatingChars(
    'qqqwerqwecccwd'
);