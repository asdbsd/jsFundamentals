function activationKeys(stringElements) {
    let activationKey = stringElements.shift();
    let actions = {
        'Slice': sliceChars,
        'Contains': containsString,
        'Flip': changeCase
    }

    while (stringElements[0] !== 'Generate') {
        let [command, ...rest] = stringElements.shift().split('>>>');
        let action = actions[command];
        action(...rest);
    }

    console.log(`Your activation key is: ${activationKey}`);


    function sliceChars(...elements) {
        let startIndex = Number(elements[0]);
        let endIndex = Number(elements[1]);
        
        let leftSide = activationKey.substring(0, startIndex);
        let rightSide = activationKey.substring(endIndex);

        activationKey = leftSide + rightSide;
        console.log(activationKey)
    }

    function changeCase(...elements) {
        let toCase = elements[0];
        let startIndex = Number(elements[1]);
        let endIndex = Number(elements[2]);

        let leftSide = activationKey.substring(0, startIndex);
        let cased = toCase === 'Upper' ? activationKey.substring(startIndex, endIndex).toUpperCase() : activationKey.substring(startIndex, endIndex).toLowerCase()
        let rightSide = activationKey.substring(endIndex);

        activationKey = leftSide + cased + rightSide;
        console.log(activationKey);
    

    }

    function containsString(...elements) {
        if (activationKey.includes(elements[0])) {
            console.log(`${activationKey} contains ${elements[0]}`);
        } else {
            console.log("Substring not found!");
        }
    }
}


activationKeys(
    [
        "abcdefghijklmnopqrstuvwxyz",
        "Slice>>>2>>>6",
        "Flip>>>Upper>>>3>>>14",
        "Flip>>>Lower>>>5>>>7",
        "Contains>>>def",
        "Contains>>>deF",
        "Generate"
    ]
);
console.log('-----------')

activationKeys(
    [
        "134softsf5ftuni2020rockz42",
        "Slice>>>3>>>7",
        "Contains>>>-rock",
        "Contains>>>-uni-",
        "Contains>>>-rocks",
        "Flip>>>Upper>>>2>>>8",
        "Flip>>>Lower>>>5>>>11",
        "Generate"
    ]
);
