function minerTask(stringElements) {
    let resources = new Map();

    for (let i = 0; i < stringElements.length; i++) {
        let resource = stringElements[i++];
        let qty = stringElements[i];

        if (resources.has(resource)) {
            let oldValue = resources.get(resource);
            resources.set(resource, oldValue += Number(qty)) ;
        } else {
            resources.set(resource, Number(qty));
        }
    }

    for(let [resource, qty] of resources) {
        console.log(`${resource} -> ${qty}`);
    }
    
}

minerTask(
    [
        'Gold',
        '155',
        'Silver',
        '10',
        'Copper',
        '17'
    ]
)
console.log('--------------------')

minerTask(
    [
        'gold',
        '155',
        'silver',
        '10',
        'copper',
        '17',
        'gold',
        '15'
    ]
        
)