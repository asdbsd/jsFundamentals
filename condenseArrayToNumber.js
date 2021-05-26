function condenseArrayToNumber(nums) {

    while (nums.length > 1) { 
        condenseArray(nums);
    }

    function condenseArray(array) {
        let condensedArray = [];
        for (let i = 0; i < array.length - 1; i++) {
            condensedArray[i] = array[i] + array[i+1];
        }
        nums = condensedArray;
    }
    

    console.log(nums[0]);
}

condenseArrayToNumber([1]);