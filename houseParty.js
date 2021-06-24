function houseParty(list) {
    let guestList = [];

    for (let i = 0; i < list.length; i++) {
        let [guestName, firstWord, secondWord] = list[i].split(' ');

        switch(secondWord) {
            case 'going!': 
                if (guestList.includes(guestName)) {
                    console.log(`${guestName} is already in the list!`);
                } else {
                    guestList.push(guestName);
                }
                break;
            

            case 'not':
                if (guestList.includes(guestName)) {
                    guestList.splice(guestList.indexOf(guestName), 1);
                } else {
                    console.log(`${guestName} is not in the list!`);
                }
                break;
        }
    }

    return guestList.join('\n')
}

// console.log(houseParty(['Allie is going!',
// 'George is going!',
// 'John is not going!',
// 'George is not going!']
// ))

// console.log('---------------')

console.log(houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
))