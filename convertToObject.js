function convertToObject(string) {
    let object = JSON.parse(string);

    for (let property of Object.keys(object)) {
        console.log(`${property}: ${object[property]}`);
    }
}


convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')