function grades(number){

    if (number < 3) {
        result = 'Fail';
    } else if (number >= 3 && number < 3.5) {
        result = 'Poor';
    } else if (number >= 3.5 && number < 4.5) {
        result = 'Good';
    } else if (number >= 4.5 && number < 5.5) {
        result = 'Very good';
    } else {
        result = 'Excellent';
    }

    return `${result} (${number.toFixed(2)})`;

}



console.log(grades(2.99));