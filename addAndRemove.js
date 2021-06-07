function addAndRemove(commands) {
    let result = [];

    for (i = 0; i < commands.length; i++) {
        let currentNumber = i + 1;
        switch (commands[i]) {
            case 'remove': result.pop(); break;
            default: result.push(i + 1); break;
        }

    }

    if(result.length < 1) {
        console.log('Empty');
    } else {
        console.log(result.join(' ')); 
    }
    
}

addAndRemove(['add', 'add', 'add', 'add']);
console.log('----------------');
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
