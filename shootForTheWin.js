function shootForTheWin(stringElements) {
    let targets = stringElements.shift().split(' ').map(Number);
    let shotTargets = 0;
    
    for(let element of stringElements) {
        if (element === 'End') {
            return `Shot targets: ${shotTargets} -> ${targets.join(' ')}`;
        } else {
            if (targets[Number(element)] !== undefined && targets[Number(element)] !== -1) {
                let targetValue = targets[Number(element)];
                shotTargets++;
                targets[Number(element)] = -1;
                targets.map((target, i) => {
                    if (target !== -1) {
                        if (target > targetValue) {
                            targets[i] -= targetValue
                        } else {
                            targets[i] += targetValue;
                        }
                    }
                });
            } 
        }
    }
}

console.log(shootForTheWin([
    "24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"
]));
console.log('--------------------')
console.log(shootForTheWin([
    "30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"
]));