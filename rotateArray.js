function rotateArray(elements) {
    let elementsToReverse = elements;
    let timesReversed = elementsToReverse.pop();

    for(i = 0; i < Number(timesReversed); i++) {
        let lastElement = elementsToReverse.pop();
        elementsToReverse.unshift(lastElement);
    }

    console.log(elementsToReverse.join(' '));
}

rotateArray(['1', '2', '3', '4', '2'])
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])
