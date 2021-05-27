function arrayRotation(elements, rotation) {
    
    for(let i = 0; i < rotation; i++) {
        let updatedElements = [];
        for (let j = 1; j < elements.length; j++) {
            updatedElements.push(elements[j]);
        }
        
        updatedElements.push(elements[0]);
        elements = updatedElements;
    }
    console.log(elements.join(' '));
}

// arrayRotation([51, 47, 32, 61, 21], 2);
// arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);

