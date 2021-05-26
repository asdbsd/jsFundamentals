function triplesOfLatinLetters(times) {

    let letter = '';
    for (let i = 0; i < times; i++) {
        for (let j = 0; j < times; j++) {
            for (let y = 0; y < times; y++) {
                result = String.fromCharCode(97 + i) + String.fromCharCode(97 + j) + String.fromCharCode(97 + y);
                console.log(result);
            }
        }
    }
}

triplesOfLatinLetters(3);