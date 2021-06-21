function passwordValidator(password) {

    function letterOrNumber(character) {
        let result = false;
        /\d/.test(character) === true || /[a-zA-Z]/.test(character) === true ? result = true : result = false;
        return result;
    }

    let errors = [];
    let charsCount = password.length;
    let wrongCharCount = 0;
    let digitsCount = 0;

    if (charsCount > 5 && charsCount < 11) {
        errors = [];
    } else {
        errors.push('Password must be between 6 and 10 characters');
    }

    for (let i = 0; i < password.length; i++) {
        
        if (!letterOrNumber(password[i])) {
            wrongCharCount++;
        }

        if(/\d/.test(password[i])) {
            digitsCount++;
        }
    

    }

    if (wrongCharCount > 0) {
        errors.push('Password must consist only of letters and digits');
    }

    if(digitsCount < 2) {
        errors.push('Password must have at least 2 digits');
    }

    if (errors.length < 1) {
        return 'Password is valid'
    } else {
        return errors.join('\n');
    }    


}

console.log(passwordValidator('logIn'));
console.log(passwordValidator('MyPass123'));
console.log(passwordValidator('Pa$s$s'));