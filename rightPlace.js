function rightPlace(stringWithMissingChar, missingChar, stringToCompareWith) {
    correctedString = stringWithMissingChar.replace('_', missingChar);

    result = correctedString === stringToCompareWith ? 'Matched' : 'Not Matched';

    console.log(result);
}

rightPlace('Str_ng', 'i', 'String');
