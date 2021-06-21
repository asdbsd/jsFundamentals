function repeatString(text, number) {
    let exitText = '';
    for (let i = 0; i < number; i++) {
        exitText += text;
    }

    console.log(exitText);
}

repeatString('abc', 3);