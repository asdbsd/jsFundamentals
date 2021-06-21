function addAndSubstract(num1, num2, num3) {
    function sum(n, x) {
        return n + x;
    }

    function substract(j, y) {
        return j - y;
    }

    let firstNumber = sum(num1, num2);
    return substract(firstNumber, num3);
}

console.log(addAndSubstract(23, 6, 10));
console.log(addAndSubstract(1, 17, 30));
console.log(addAndSubstract(42, 58, 100));
