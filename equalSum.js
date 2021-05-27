function equalSum(arr) {
    let result = 0;

    if (arr.length === 1) {
        result = 0;
    } else if (arr.length > 1) {
        for (i = 1; i < arr.length; i++){
            let rightSum = 0;
            let leftSum = 0;
    
            for(let j = i; j >= 0; j--) {
                if (j - 1 < 0) {
                    rightSum += 0;
                } else {
                    rightSum += arr[j - 1];
                }
                
            }

            for(let y = i; y <= arr.length; y++) {
                if (y + 1 > arr.length - 1) {
                    leftSum += 0
                } else {
                    leftSum += arr[y + 1];
                }
                
            }

            if (rightSum === leftSum) {
                result = i;
                break;
            } else {
                result = 'no'
            }

        }
    } else {
        result = 'no'
    }

    console.log(`${result}`);
}

equalSum([1, 2, 3, 3]);
equalSum([1, 2]);
equalSum([1]);
equalSum([1, 2, 3]);
equalSum([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
equalSum([]);