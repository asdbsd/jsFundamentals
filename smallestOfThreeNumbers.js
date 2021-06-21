function smallestOfThreeNumbers(num1, num2, num3) {
    if (num1 > num2 && num3 > num2) {
        return num2;
    } else if (num2 > num1 && num3 > num1) {
        return num1;
    } else {
        return num3;
    }
}

console.log(smallestOfThreeNumbers(2, 5, 3));
console.log(smallestOfThreeNumbers(600, 342, 123));
console.log(smallestOfThreeNumbers(25, 21, 4));


