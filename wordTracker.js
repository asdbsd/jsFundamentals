function wordTracker (stringElements) {

    let occurances = {};
    stringElements
        .shift()
        .split(' ')
        .forEach(word => {
            occurances[word] = 0;
        });

    stringElements.forEach( word => {
        if (occurances.hasOwnProperty(word)) {
            occurances[word]++;
        }
    });

    return Object.keys(occurances)
        .sort((a, b) =>  occurances[b] - occurances[a])
        .map( word => `${word} - ${occurances[word]}`)
        .join('\n');



}

console.log(wordTracker([
    'this sentence', 'In','this','sentence','you','have',
    'to','count','the', 'occurances','of','the','words','this',
    'and','sentence','because','this','is','your','task'
]));