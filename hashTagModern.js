function hashTagModern (string) {
    // let result = [];
    // let collecting = false;
    // let currentWord = '';

    // for (let char of string) {
    //     if (collecting) {
    //         if (char === ' ') {
    //             collecting = false;
    //             if (currentWord.length > 0) {
    //                 result.push(currentWord)
    //             }
    //             currentWord = '';
    //         } else { 
    //             code = char.charCodeAt(0);
    //             if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122) ) {
    //                 currentWord += char;
    //             } else {
    //                 collecting = false;
    //             }
    //         }
    //     } else {
            
    //         if (char === '#') {
    //             collecting = true;
    //         }
            
    //     }
    // }

    // if (collecting && currentWord.length > 0) {
    //     result.push(currentWord);
    // }

    // console.log(result.join('\n'))

    let tokens = string.split(' ');
    let result = [];

    for (let token of tokens) {
        if (token.length > 1 && token[0] === '#') {
            let valid = true;
            for (let char of token.substring(1)) {
                code = char.charCodeAt(0);
                if ( code < 65 || code > 122 || ( code >= 91 && code <= 96) ) {
                    valid = false;
                    break;
                }
            }

            if (valid) {
                result.push(token.substring(1))
            }
        }
    }

    console.log(result.join('\n'))

}

hashTagModern(
    'Nowadays everyone uses # to tag a #special word in #socialMedia'
);