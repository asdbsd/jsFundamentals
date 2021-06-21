function factorialDivision(number1, number2) {
    function findFactorial(number){
        let factorial = number;
        for(let i = number; i > 1; i--) {
               factorial *= i - 1;
        }
        return factorial;
    }

    let firstFactorial  = findFactorial(number1);
    let secondFactorial = findFactorial(number2);

    console.log((firstFactorial / secondFactorial).toFixed(2));
}

factorialDivision(5,2)