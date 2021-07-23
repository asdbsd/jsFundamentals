function addressBook(stringElements) {
    let peopleAddresses = {};

    for (let person of stringElements) {
        let [name, street] = person.split(':');
        peopleAddresses[name] = street;
    }

    let result = [];
    
    Object.keys(peopleAddresses)
    .sort((a, b) => a.localeCompare(b))
    .forEach( name => result.push(name + ' -> ' + peopleAddresses[name]));
    
    return result.join('\n')
}

console.log(
    addressBook(
        [
            'Tim:Doe Crossing',
            'Bill:Nelson Place',
            'Peter:Carlyle Ave',
            'Bill:Ornery Rd'
        ]

    )
);