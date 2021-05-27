function mergeArrays(arr1, arr2) {
    mergedArray = [];

    for (i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
    }

    for (let i = 0; i < arr1.length / 2 ; i++) {
        let secondPartIndex = (arr1.length / 2) + i
        if (i % 2 === 0) {
            mergedArray.push(Number(arr1[i]) + Number(arr1[secondPartIndex]));
        } else {
            mergedArray.push(arr1[i] + arr1[secondPartIndex]);
        }
    }

    console.log(mergedArray.join(' - '));
}

mergeArrays(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);

console.log('----------');

mergeArrays(
    ['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']
)