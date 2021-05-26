function chessBoard(size) {
    let isWhite = false;
    console.log('<div class="chessboard">');

    
    
    for (let i = 0; i < size; i++) {
        console.log('  <div>');

        for (let j = 0; j < size; j++) {
            
            if ((i + j) % 2 === 0) {
                isWhite = false;
            } else {
                isWhite = true;
            }
            
            console.log(isWhite ? '    <span class="white"></span>' : '    <span class="black"></span>' );
        }
        console.log('  </div>');
        
    }  
    console.log('</div>');
}

chessBoard(3);