// function evenAndOddSubstraction(numbers) {
//     let evenSum = 0;
//     let oddSum = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         numbers[i] % 2 === 0 ? evenSum += numbers[i] : oddSum += numbers[i];
//     }
//     console.log(evenSum - oddSum);
// }

// evenAndOddSubstraction([2,4,6,8,10]);







function evenAndOddSubtraction(nums) {
 
    let even = 0;
    let odd = 0;
 
    // iterate through the array
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) { // even
            // find the sum of even nums
            even += nums[i];
        } else if (nums[i] % 1 === 0) { // odd
            // find the sum of odd nums
            odd += nums[i];
        }
    }
    // keep the results in variables
    // find the difference between the sum
    let result = even - odd;
 
    console.log(result);
 
}