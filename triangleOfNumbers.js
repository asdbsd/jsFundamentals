function triangleOfNumbers(number) {
    let lastNumber = Number(number);


    for (let n = 1; n < (lastNumber + 1); n++) {
        result = "";
        for (let y = 1; y < n + 1; y++) {
            result += n + " ";
        }

        console.log(result);
        

    }
}

triangleOfNumbers(6);