function smallestTwo (numbers) {

    let sorted = numbers.sort((a,b) => { 
        return a - b;
    });
    
    return sorted.slice(0,2).join(' ');
    
}

console.log(smallestTwo([30, 15, 50, 5]));
smallestTwo([3, 0, 10, 4, 7, 3]);