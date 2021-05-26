function mergeArrays(arr1, arr2) {
    let result = [];
    let workingArray = arr1.length >= arr2.length ? arr1 : arr2;

    for(let i = 0; i < workingArray.length; i++) {

        
    }

    console.log(result.join(' - '));
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