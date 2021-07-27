function travelTime(stringElements) {
    let destinations = {};

    stringElements.forEach( service => {
        let [destination, course, cost] = service.split(' > ');

        if (!destinations.hasOwnProperty(destination)) {
            destinations[destination] = {};
            destinations[destination][course] = 0;

            destinations[destination][course] = Number(cost);
        } else {
            if(!destinations[destination].hasOwnProperty(course)) {
                destinations[destination][course] = Number(cost);
            } else {              
                if (destinations[destination][course] > Number(cost)) {
                    destinations[destination][course] = Number(cost);
                }
            }
        }
    });

    let result = [];
    
    

    Array.from(Object.keys(destinations)).sort((a,b) => a.localeCompare(b)).forEach( country => {
        let countryString = country + ' -> '
        result.push(countryString);

        for (let course of Object.keys(destinations[country])) {
            result[result.length - 1] += course + ' -> ' + destinations[country][course] + ' ';
        }

    });

    return result.join('\n');
 

}

console.log(
    travelTime(
        [
            "Bulgaria > Sofia > 500",
            "Bulgaria > Sopot > 800",
            "France > Paris > 2000",
            "Albania > Tirana > 1000",
            "Bulgaria > Sofia > 200"
        ]
            
    )
)