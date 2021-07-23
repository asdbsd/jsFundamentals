function cardGame(stringElements) {

    let players = {};
    let playerResults = {};
    stringElements.forEach( person => {
        let [name, cards] = person.split(': ');
        
        if (players.hasOwnProperty(name)) {
            cards.split(', ').forEach( card => players[name].add(card));
        } else {
            players[name] = new Set;
            cards.split(', ').forEach( card => players[name].add(card));
            playerResults[name] = 0;
        }
    });

    
    for (let key in players) {
        let sum = 0;
        players[key].forEach( (card) => {
            if (card.length > 2) {
                sum += calculatePoints(card[0] + card[1], card[2]);
            } else {
                sum += calculatePoints(card[0], card[1]);
            }
            
        })
        playerResults[key] = sum;
    };

    let result = [];

    for (let [player, points] of Object.entries(playerResults)) {
        console.log(player + ':' + ' ' + points);
    }
    


    function calculatePoints(power, multiplier) {
        powers = {
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
            '6': '6',
            '7': '7',
            '8': '8',
            '9': '9',
            '10': '10',
            'J': '11',
            'Q': '12',
            'K': '13',
            'A': '14',
        }

        multipliers = {
            'C': '1',
            'D': '2',
            'H': '3',
            'S': '4',
        }


        return Number(powers[power]) * Number(multipliers[multiplier]);
    }


    
}


console.log(cardGame(
    [
        'Peter: 2C, 4H, 9H, AS, QS',
        'Tomas: 3H, 10S, JC, KD, 5S, 10S',
        'Andrea: QH, QC, QS, QD',
        'Tomas: 6H, 7S, KC, KD, 5S, 10C',
        'Andrea: QH, QC, JS, JD, JC',
        'Peter: JD, JD, JD, JD, JD, JD'
    ]
));
