function wordOccurances(sentance, word) {
    console.log(sentance.split(' ').filter( char => char === word).length)
}

wordOccurances("This is a word and it also is a sentence",
"is"
)