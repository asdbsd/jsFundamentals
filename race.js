function race(stringElements) {
    let result = {};
    stringElements
    .shift()
    .split(', ')
    .forEach( racer => {
        result[racer] = 0;
    })
    
    for (let person of stringElements) {
        let namePattern = /[A-Za-z]+/g;
        let distancePattern = /[0-9]/g
        let name = '';
        while ( (validName = namePattern.exec(person)) !== null) {
            name += validName[0];
        }
        if (result.hasOwnProperty(name)) {
            while ( (validDistance = distancePattern.exec(person))) {
                result[name] += Number(validDistance[0]);
            }
        }
        



        if (name === 'endofrace') {
            Array.from(Object.entries(result))
            .sort((a,b) => b[1] - a[1])
            .forEach( (name, i) => {
                if (i < 3) {
                    let place = i + 1;
                    if (place === 1) {
                        console.log(`1st place: ${name[0]}`);
                    } else if (place === 2) {
                        console.log(`2nd place: ${name[0]}`);
                    } else {
                        console.log(`3rd place: ${name[0]}`);
                    }
                }
            });
        }
        
    }



}

race(
    [
        "George, Peter, Bill, Tom",
        "G4e@55or%6g6!68e!!@",
        "R1@!3a$y4456@",
        "B5@i@#123ll",
        "G@e54o$r6ge#",
        "7P%et^#e5346r",
        "T$o553m&6",
        "end of race"
    ]
);