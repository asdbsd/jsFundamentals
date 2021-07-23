function oddOccurrances (inputString) {
    let obj = new Map;
    let result = [];
    inputString
    .split(' ')
    .forEach(element => {
        element = element.toLowerCase();
        if( !obj.has(element) ) {
            obj.set(element, 0);
        }

        obj.set(element, obj.get(element) + 1)

    });

    return Array.from(obj.keys()).filter( key =>  obj.get(key) % 2 !== 0).join(' ');


}

console.log(
    oddOccurrances(
        'Java C# Php PHP Java PhP 3 C# 3 1 5 C#'
    )
)