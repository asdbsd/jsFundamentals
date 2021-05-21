function sumDigits(number) {
    let numberInString = String(number);
    let result = 0;
    
    for (i = 0; i < numberInString.length; i++) {
        result += Number(numberInString[i]);
    }
    
    console.log(result);
}

sumDigits(543);