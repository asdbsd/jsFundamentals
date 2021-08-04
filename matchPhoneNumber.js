function matchPhoneNumber(phoneNumbers) {
    let pattern = /\+359 2 \d{3} \d{4}|\+359-2-\d{3}-\d{4}\b/g;
    let result = [];

    while ( (validNumber = pattern.exec(phoneNumbers)) !== null ) {
        result.push(validNumber[0])
    }

    console.log(result.join(', '))
}

matchPhoneNumber(
    "+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222"
)