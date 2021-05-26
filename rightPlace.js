function rightPlace(stringWithMissingChar, missingChar, stringToCompareWith) {
    correctedString = stringWithMissingChar.replace('_', missingChar);

    result = correctedString === stringToCompareWith 
        ? 'Matched' 
        : 'Not Matched';
    
    console.log('1----------')
    console.log(result);
    
}

rightPlace('Str_ng', 'i', 'String');


function rightPlace2(charMissingString, char, compareString) {
    let finalString = '';
    for (i = 0; i < charMissingString.length; i++) {
        charMissingString[i] === '_' 
        ? finalString += char 
        : finalString += charMissingString[i];
    }

    result = finalString === compareString 
        ? 'Matched' 
        : 'Not Matched';

    console.log('2----------')
    console.log(result)
}

rightPlace2('Str_ng', 'i', 'Strong');