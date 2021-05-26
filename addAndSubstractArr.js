function addAndSubstractArr(arr) {
    let arrSum = 0;
    let newArrSum = 0;
    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        arrSum += arr[i];
        if (arr[i] % 2 === 0) {
            newArray.push(arr[i] + i);
        } else {
            newArray.push(arr[i] - i);
        }
        newArrSum += newArray[i];
    }

    console.log(newArray);
    console.log(arrSum);
    console.log(newArrSum);
}

//addAndSubstractArr([5, 15, 23, 56, 35]);
console.log('----------');
addAndSubstractArr([-5, 11, 3, 0, 2]);