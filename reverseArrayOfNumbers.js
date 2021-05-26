function reverseArrayOfNumbers(num, array) {
    let newArray = [];
    let reversedArray = [];

    for (let i = 0; i < num; i++) {
        newArray.push(array[i]);
    }
    for (let i = (newArray.length - 1); i >= 0; i--) {
        reversedArray.push(newArray[i]);
    }
    console.log(reversedArray.join(' '));
}

reverseArrayOfNumbers(3, [10,20,30,40,50])