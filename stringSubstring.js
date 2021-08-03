function stringSubstring(word, text) {
    let loweredText = text.toLowerCase().split(' ');


    if (loweredText.includes(word.toLowerCase())) {
        console.log(`${word}`);
    } else {
        console.log(`${word} not found!`);
    }

}


stringSubstring(
    'javascript',
    'JavaScript is the best programming language'
)
console.log('----------------')

stringSubstring(
    'python',
    'JavaScript is the best programming language'
)
console.log('----------------')

stringSubstring(
    'drashki',
    'bla bla bla nodrashki'
)