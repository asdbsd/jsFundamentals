function login(collection) {
    
    let collectionIndex = 0;
    let currentUser = collection[collectionIndex++];

    // reverse the password
    let splitPassword = currentUser.split("");
    let reversedArray = splitPassword.reverse();
    let correctPassword = reversedArray.join("");
    
    let currentPassword = collection[collectionIndex++];
    let wrongPasswords = 0;

    while(currentPassword != correctPassword) {
        if (wrongPasswords === 3) {
            console.log(`User ${currentUser} blocked!`);
            return;
        } else {
            wrongPasswords++;
        }
        console.log('Incorrect password. Try again.');
        currentPassword = collection[collectionIndex++];

    }

    console.log(`User ${currentUser} logged in.`);
    
}

login(['Acer','login','go','let me in','recA']);