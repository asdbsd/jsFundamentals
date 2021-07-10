function memoryGame(elements) {
    let board = elements.shift().split(' ');
    let moves = 0;
    
    for(let indexes of elements) {

        let [index1, index2] = indexes.split(' ');

        if (index1 === 'end') {
            console.log('Sorry you lose :(');
            console.log(board.join(' '));
            return; 
        }
        moves++;
        if( Number(index1) === Number(index2) || 
            (Number(index1) < 0 || Number(index2) < 0) || 
            (Number(index1) > board.length - 1 || Number(index2) > board.length - 1) ) {
            console.log('Invalid input! Adding additional elements to the board');
            let newElements = [`-${moves}a`, `-${moves}a`];
            board.splice(board.length / 2, 0, ...newElements);
        } else if (board[Number(index1)] === board[Number(index2)]) {
            console.log(`Congrats! You have found matching elements - ${board[Number(index1)]}!`);
            if (Number(index1) < Number(index2)) {
                board.splice(Number(index1), 1);
                board.splice(Number(index2 - 1), 1);    
            } else {
                board.splice(Number(index2), 1);
                board.splice(Number(index1 - 1), 1);  
            }

            if(board.length < 1) {
                console.log(`You have won in ${moves} turns!`);
                return;
            }
            
        } else {
            console.log('Try again!');
        }

    }


}


// memoryGame([
//     "1 1 2 2 3 3 4 4 5 5", 
//     "1 0",
//     "-1 0",
//     "1 0", 
//     "1 0", 
//     "1 0", 
//     "end"
// ]);
// console.log('--------------')

// memoryGame([
//     "a 2 4 a 2 4", 
//     "0 3", 
//     "0 2",
//     "0 1",
//     "0 1", 
//     "end"
// ]);
// console.log('--------------')

// memoryGame([
//     "a 2 4 a 2 4", 
//     "4 0", 
//     "0 2",
//     "0 1",
//     "0 1", 
//     "end"
// ]);
