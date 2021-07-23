function wordOccurances(stringElements) {
    let words = new Map();

    for (let string of stringElements) {
        if (!words.has(string)) {
            words.set(string, 1);
        } else {
            let occurancesCount = words.get(string);
            words.set(string, ++occurancesCount);
        }
    }

    let result = [];

    Array.from(words).sort((a,b) => b[1] - a[1]).forEach( occurance => {
        result.push(`${occurance[0]} -> ${occurance[1]} times`);
    });

    return result.join('\n');
}

console.log(
    wordOccurances(
        [
            "Here", "is", "the", "first", "sentence", 
            "Here", "is", "another", "sentence", 
            "And", "finally", "the", "third", "sentence"
        ]
    )
);