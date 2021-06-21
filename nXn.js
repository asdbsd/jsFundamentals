function nXn(number) {
    function drawRow(number) {
        let row = [];
        for (let i = 0; i < number; i++) {
            row.push(number);
        }
        return row;
    }


    for(let i = 0; i < number; i++) {
        console.log(drawRow(number).join(' '))
    }

    


}

nXn(3);
nXn(7);
nXn(2);