function thePianist(stringElements) {
    let n = Number(stringElements.shift());
    let catalog = {};

    let actions = {
            Add: add,
            Remove: remove,
            ChangeKey: changeKey,
    }

    for (let i = 0; i < n; i++) {
        let [composition, composer, key] = stringElements.shift().split('|');

        catalog[composition] = {
            composer: composer,
            key: key
        }
    }

    while (stringElements[0] !== 'Stop') {
        let tokens = stringElements.shift().split('|');
        let command = tokens[0];
        let name = tokens[1];

        let action = actions[command];
        action(name, tokens[2], tokens[3]);
    }

    let sorted = Object.entries(catalog).sort(sortSongs);

    function sortSongs(song1, song2) {
        let firstSongName = song1[0];
        let secondSongName = song2[0];

        let firstSongKey = song1[0].key;
        let secondSongKey = song2[0].key;

        return (firstSongName.localeCompare(secondSongName)) || (firstSongKey.localeCompare(secondSongKey));
    }

    function add(name, composer, key) {
        if (catalog[name] !== undefined) {
            console.log(`${name} is already in the collection!`);
        } else {
            catalog[name] = {
                composer,
                key
            }
            console.log(`${name} by ${composer} in ${key} added to the collection!`)
        }
    }

    function remove(name) {
        if (catalog[name] === undefined) {
            console.log(`Invalid operation! ${name} does not exist in the collection.`);
        } else {
            delete catalog[name];
            console.log(`Successfully removed ${name}!`);
        }
    }

    function changeKey(name, newKey) {
        if (catalog[name] === undefined) {
            console.log(`Invalid operation! ${name} does not exist in the collection.`)
        } else {
            catalog[name].key = newKey;
            console.log(`Changed the key of ${name} to ${newKey}!`);
        }
    }



    for (let composition of sorted) {
        console.log(`${composition[0]} -> Composer: ${composition[1].composer}, Key: ${composition[1].key}`);
    }


}

thePianist(
    [
        '3',
        'Fur Elise|Beethoven|A Minor',
        'Moonlight Sonata|Beethoven|C# Minor',
        'Clair de Lune|Debussy|C# Minor',
        'Add|Sonata No.2|Chopin|B Minor',
        'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
        'Add|Fur Elise|Beethoven|C# Minor',
        'Remove|Clair de Lune',
        'ChangeKey|Moonlight Sonata|C# Major',
        'Stop'  
      ]
      
);
console.log('--------------')

// thePianist(
//     [
//         '4',
//         'Eine kleine Nachtmusik|Mozart|G Major',
//         'La Campanella|Liszt|G# Minor',
//         'The Marriage of Figaro|Mozart|G Major',
//         'Hungarian Dance No.5|Brahms|G Minor',
//         'Add|Spring|Vivaldi|E Major',
//         'Remove|The Marriage of Figaro',
//         'Remove|Turkish March',
//         'ChangeKey|Spring|C Major',
//         'Add|Nocturne|Chopin|C# Minor',
//         'Stop'
//       ]
// );