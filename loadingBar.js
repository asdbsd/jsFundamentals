function loadingBar(number){
    let result = [];
    let loadingBar = '';
    let times = number / 10;

    for(let i = 0; i < 10; i++) {
        if (i < times) {
            loadingBar += '%';
        } else {
            loadingBar += '.';
        }
    }

    if (number / 10 === 10) {
        result.push(`${number}$ Complete!`);
        result.push(`[${loadingBar}]`);
        return result.join('\n');
    } else if (number / 10 === 0)  {
        loadingBar = '[..........]';
        result.push(`${number}% ${loadingBar}`);
        result.push(`Still loading...`);
        return result.join('\n');
    } else {
        result.push(`${number}% [${loadingBar}]`);
        result.push(`Still loading...`);
        return result.join('\n');
    }

}

console.log(loadingBar(30));
console.log(loadingBar(50));
console.log(loadingBar(100));
console.log(loadingBar(0));