function lowerOrUpperCase(letter) {
    let letterToCheck = letter;

    if (letter === letter.toUpperCase()) {
        console.log('upper-case');
    } else {
        console.log('lower-case');
    }
}

lowerOrUpperCase('L')