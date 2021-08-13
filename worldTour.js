function worldTour(stringElements) {
    let stops = stringElements.shift();
    let actions = {
        'Add Stop': addStop,
        'Remove Stop': remove,
        'Switch': swap,
    }

    while(stringElements[0] !== 'Travel') {
        let tokens = stringElements.shift().split(':');
        let command = tokens[0];
        let action = actions[command];
        action(tokens[1], tokens[2]);

        console.log(stops);
    }

    console.log(`Ready for world tour! Planned stops: ${stops}`);

    function addStop(i, str) {
        i = Number(i);
        if (validateIndex(i)) {
            let left = stops.substring(0, i);
            let right = stops.substring(i);
            stops = left + str + right;
        }

    }

    function remove(startIndex, endIndex) {
        startIndex = Number(startIndex);
        endIndex = Number(endIndex);

        if (validateIndex(startIndex) && validateIndex(endIndex)) {
            let left = stops.substring(0, startIndex);
            let right = stops.substring(endIndex + 1);
            stops = left + right;
        }
    }

    function swap(oldStr, newStr) {
        let pattern = new RegExp(oldStr, 'g');
        stops = stops.replace(pattern, newStr);
    }


    function validateIndex(index) {
        return (index >= 0) && (index < stops.length);
    }
}

worldTour(
    [
        'Hawai::HawaiCyprys-Greece',
        'Add Stop:7:Rome',
        'Remove Stop:11:16',
        'Switch:Hawai:Bulgaria',
        'Travel'
    ]
);
console.log('------------')

worldTour(
    [
        'Hawai::Cyprys-Greece',
        'Add Stop:7:Rome',
        'Remove Stop:11:16',
        'Switch:Hawai:Bulgaria',
        'Travel'
    ]
);