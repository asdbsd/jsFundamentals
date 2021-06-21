function sumFirstAndLast (collection) {
    return Number(collection.pop()) + Number(collection.shift());
}

console.log(sumFirstAndLast(['20', '30', '40']));
console.log(sumFirstAndLast(['5', '10']));