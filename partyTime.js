function partyTime(stringElements) {
    let partyStarted = false;
    let list = {
        vip: [],
        regular: []
    }

    for (let i = 0; i < stringElements.length; i++) {
        let name = stringElements[i];
        if(name === 'PARTY') {
            partyStarted = true;
        } else {
            let char = name[0];
            if (partyStarted) {
                if (isNaN(char)) {
                    list.regular.splice(list.regular.indexOf(stringElements[i]), 1);
                } else {
                    list.vip.splice(list.vip.indexOf(stringElements[i]), 1);
                }
            } else {
                if (isNaN(char)) {
                    list.regular.push(name);
                } else {
                    list.vip.push(name);
                }
            }

        }
    }
    let result = [];
    
    result.push(list.regular.length + list.vip.length);
    list.vip.forEach( guest => result.push(guest));
    list.regular.forEach( guest => result.push(guest));

    return result.join('\n');

} 


console.log(
    partyTime(
        [
            '7IK9Yo0h',
            '9NoBUajQ',
            'Ce8vwPmE',
            'SVQXQCbc',
            'tSzE5t0p',
            'PARTY',
            '9NoBUajQ',
            'Ce8vwPmE',
            'SVQXQCbc'
        ]

    )
);
console.log('-------------------------')

console.log(
    partyTime(
        [
            'm8rfQBvl',
            'fc1oZCE0',
            'UgffRkOn',
            '7ugX7bm0',
            '9CQBGUeJ',
            '2FQZT3uC',
            'dziNz78I',
            'mdSGyQCJ',
            'LjcVpmDL',
            'fPXNHpm1',
            'HTTbwRmM',
            'B5yTkMQi',
            '8N0FThqG',
            'xys2FYzn',
            'MDzcM9ZK',
            'PARTY',
            '2FQZT3uC',
            'dziNz78I',
            'mdSGyQCJ',
            'LjcVpmDL',
            'fPXNHpm1',
            'HTTbwRmM',
            'B5yTkMQi',
            '8N0FThqG',
            'm8rfQBvl',
            'fc1oZCE0',
            'UgffRkOn',
            '7ugX7bm0',
            '9CQBGUeJ'
        ]
         
    )
);