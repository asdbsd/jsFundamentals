function devisableByThree() {
    for (let n = 1; n < 101; n++) {
        n % 3 === 0 ? console.log(n) : '';
    }
}

devisableByThree();