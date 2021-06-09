function magicMatrices(rows) {

    let rowSums = [];
    let columnSums = [];
    let result = false;
    
    for(i = 0; i < rows.length; i++) {
        
        let rowSum = 0;
        let columnSum = 0;
        
        for(j = 0; j < rows[i].length; j++) {
            rowSum += rows[i][j];
        }
        rowSums.push(rowSum)

        for (j = 0; j < rows.length; j++) {
            columnSum += rows[j][i];
        }
        columnSums.push(columnSum);
    }

    for (i = 0; i < rowSums.length - 1; i++) {
        if(rowSums[i] === rowSums[i + 1]) {
            result = true;
        } else {
            result = false;
            console.log(result);
            return;
        }
    }

    for(i = 0; i < columnSums.length - 1; i++) {
        if(columnSums[i] === columnSums[i + 1]) {
            result = true;
        } else {
            result = false;
            console.log(result);
            return;
        }
    }

    console.log(result);
    

}


magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]] );