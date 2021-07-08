function computerStore(stringElements) {
    let totalPrice = 0;
    let totalTax = 0;

    for (let price of stringElements) {
        switch(price) {
            case 'regular':
                if (totalPrice === 0) {
                    return 'Invalid order!';
                } else {
                    let finalPrice = totalPrice + totalTax;
                    console.log("Congratulations you've just bought a new computer!");
                    console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`);
                    console.log(`Taxes: ${totalTax.toFixed(2)}$`);
                    console.log('-----------');
                    return `Total price: ${finalPrice.toFixed(2)}$`;
                }
                break;
            case 'special':
                if (totalPrice === 0) {
                    return 'Invalid order!';
                } else {
                    let finalPrice = totalPrice + totalTax;
                    finalPrice -= finalPrice * 0.1;
                    console.log("Congratulations you've just bought a new computer!");
                    console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`);
                    console.log(`Taxes: ${totalTax.toFixed(2)}$`);
                    console.log('-----------');
                    return `Total price: ${finalPrice.toFixed(2)}$`;
                }
                break;
            default: 
                if (Number(price) < 0) {
                    console.log('Invalid price!');
                } else {
                    totalPrice += Number(price);
                    totalTax += Number(price) * 0.2;
                }
                break;
        } 
    }
}

console.log(computerStore([
    '1050', 
    '200', 
    '450',
    '2', 
    '18.50', 
    '16.86', 
    'special'
]));
console.log('------------------')

console.log(computerStore([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 'regular'
]));
console.log('------------------')

console.log(computerStore([
    'regular'
]))