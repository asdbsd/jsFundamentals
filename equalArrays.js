function equalArrays(firstArray, secondArray) {
    let sum = 0;
    for (let i = 0; i < firstArray.length; i++) {
        let firstElement = firstArray[i];
        let secondElement = secondArray[i];

        if (firstElement != secondElement) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        } else {
            sum += Number(firstElement);
        }
    }

    console.log(`Arrays are identical. Sum: ${sum}`);
}

equalArrays(['1'], ['10']);