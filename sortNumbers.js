function sortNumbers(num1, num2, num3) {

    let firstNumber = 0;
    let secondNumber = 0;
    let thirdNumber = 0;
    let numbers = [];
    numbers.push(num1, num2, num3);
    numbers.sort(function compare(first, second) { return second - first });

    numbers.forEach(element => {
        console.log(element);
    });
}


sortNumbers(2,1,3);