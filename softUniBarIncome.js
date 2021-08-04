function softUniBarIncome(stringElements){
    let totalIncome = 0;
    stringElements.pop();
    let namePattern = /\%(?<name>[A-Z][a-z]+)\%/;
    let productPattern = /\<(?<product>\w+)\>/;
    let qtyPattern = /\|(?<qty>\d+)\|/;
    let pricePattern = /(?<price>\d+\.*\d+)\$/;

    stringElements.forEach( person => {

        if (namePattern.exec(person) === null || productPattern.exec(person) === null || qtyPattern.exec(person) === null || pricePattern.exec(person) === null ) {
            
        } else {
            let name = namePattern.exec(person).groups['name'];
            let item = productPattern.exec(person).groups['product'];
            let qty = Number(qtyPattern.exec(person).groups['qty']);
            let price = Number(pricePattern.exec(person).groups['price']);
    
            console.log(`${name}: ${item} - ${(price * qty).toFixed(2)}`);
            totalIncome += price * qty;
        }
    
    });

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
    
}


softUniBarIncome(
    [
        "%George%<Croissant>|2|10.3$",
        "%Peter%<Gum>|1|1.3$",
        "%Maria%<Cola>|1|2.4$",
        "end of shift"
    ]
);
console.log('-------------')

softUniBarIncome(
    [
        "%InvalidName%<Croissant>|2|10.3$",
        "%Peter%<Gum>1.3$",
        "%Maria%<Cola>|1|2.4",
        "%Valid%<Valid>valid|10|valid20$",
        "end of shift"
    ]
);