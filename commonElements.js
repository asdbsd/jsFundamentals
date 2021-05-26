function commonElements(firstGroup, secondGroup) {
    for (let i = 0; i < firstGroup.length; i++) {
        let commonElement = '';
        for(let j = 0; j < secondGroup.length; j++) {
            if (firstGroup[i] === secondGroup[j]) {
                console.log(firstGroup[i]);
            }
        }
    }
}

commonElements(
    ['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
    );

console.log('------------------');

commonElements(
    ['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']
);