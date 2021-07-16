function phoneBook(stringElements) {
    let results = [];

    for (let element of stringElements) {
        let [name, number] = element.split(' ');

        if (results.filter((person) => person.name === name).length > 0) {
            results.map((person) => {
                if(person.name === name) {
                    person.phone = number;
                }
            })
        } else {
            results.push({ name: name, phone: number })
        }

    }

    results.map((person) => console.log(person.name + ' -> ' + person.phone))


}


phoneBook([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
]);

console.log('-----------------')