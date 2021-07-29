function censor(text, word) {

    while (text.includes(word)) {
        censored = text.replace(word, repeatWord(word))
        text = censored
    }

    function repeatWord(word) {
        return '*'.repeat(word.length);
    }

    console.log(censored)
}

censor("A small sentence with some words", "small")