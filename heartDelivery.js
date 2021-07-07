function heartDelivery(elements) {
    let result = [];
    let houses = elements.shift().split('@').map(Number);
    let currentIndex = 0;
    let lastPosotion = 0;

    for(let i = 0; i < elements.length; i++) {
        
        let [command, jumpSize ] = elements[i].split(' ');

        if (command === 'Jump') {
            currentIndex += Number(jumpSize);

            if(currentIndex > houses.length - 1) {
               currentIndex = 0; 
            } 

            if (houses[currentIndex] === 0) {
                result.push(`Place ${currentIndex} already had Valentine's day.`)
            } else {
                houses[currentIndex] -= 2;

                if(houses[currentIndex] === 0) {
                    result.push(`Place ${currentIndex} has Valentine's day.`)
                }
            }
            lastPosition = currentIndex;

        } else {
            console.log(result.join('\n'));
            console.log(`Cupid's last position was ${lastPosition}.`);
            remainingArray = houses.filter((house) => house > 0);
            if (remainingArray.length > 0) {
                console.log(`Cupid has failed ${remainingArray.length} places.`);
            } else {
                console.log('Mission was successful.')
            }
        }
    }
}

heartDelivery(
    [ 
        '2', 'Jump 1', 'Jump 2', 'Love!' 
    ]
)
console.log('-----------------------')
// heartDelivery(
//     [
//         '2@4@2',  'Jump 2',
//         'Jump 2', 'Jump 8',
//         'Jump 3', 'Jump 1',
//         'Love!'
//     ]
// )
