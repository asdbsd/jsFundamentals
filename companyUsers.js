function companyUsers(stringElements) {
    let usersList = {};

    stringElements.forEach( entry => {
        let [company, userId] = entry.split(' -> ');

        if (usersList.hasOwnProperty(company)) {
            usersList[company].add(userId);
        } else {
            usersList[company] = new Set();
            usersList[company].add(userId);
        }
    });

    Object.keys(usersList).sort((a, b) => a.localeCompare(b)).forEach( company => {
        console.log(company);
        for (let user of usersList[company]) {
            console.log(`-- ${user}`);
        }
    })
    
}

companyUsers(
    [
        'SoftUni -> AA12345',
        'SoftUni -> BB12345',
        'Microsoft -> CC12345',
        'HP -> BB12345'
    ]
        
)
console.log('-----------------------------')

companyUsers(
    [
        'SoftUni -> AA12345',
        'SoftUni -> CC12344',
        'Lenovo -> XX23456',
        'SoftUni -> AA12345',
        'Movement -> DD11111'
    ]              
)
