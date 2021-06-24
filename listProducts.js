function listProducts(products) {
    let sorted = products.sort();
	let result = [];
    
  	for(let i = 0; i < sorted.length; i++) {
        result.push(`${i + 1}.${sorted[i]}`);
    }

    return result.join('\n')
  
}


console.log(listProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']));