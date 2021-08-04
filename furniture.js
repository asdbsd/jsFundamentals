function furniture(stringElements) {
    let namePattern = /\>\>(?<name>[A-Z][A-Za-z]+)\<\<(?<price>\d+\.{0,1}\d*)\!(?<qty>\d+)/g;
    let totalAmount = 0;
    console.log('Bought furniture:')
    stringElements.forEach( element => {
        while ( (validPurchise = namePattern.exec(element)) !== null ) {
            console.log(validPurchise.groups['name']);
            totalAmount += Number(validPurchise.groups['price']) * Number(validPurchise.groups['qty'])
        }
    });
    console.log(`Total money spend: ${totalAmount.toFixed(2)}`);
    
}

furniture(
    [
        ">>Sofa<<312.23!3",
        ">>TV<<300!5",
        ">Invalid<<!5",
        "Purchase"
    ]
);