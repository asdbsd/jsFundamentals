function solve(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songQty = input.shift();
    let songStrings = input.splice(0, songQty);


    let songs = [];
    for(let song of songStrings) {
        let [typeList, name, time] = song.split('_');
        songs.push(new Song(typeList, name, time));
    }

    switch (input[0]) {
        case 'all':
            for(let song of songs) {
                console.log(song.name);
            }
        break;

        default: 
            let result = songs.filter((e) => e.typeList === input[0]);
            for(song of result) {
                console.log(song.name);
            }
        break;
        
    }
}

solve(
    [
        3,
        'favourite_DownTown_3:14',
        'favourite_Kiss_4:16',
        'favourite_Smooth Criminal_4:01',
        'favourite'
    ]
);

solve(
    [
        4,
        'favourite_DownTown_3:14',
        'listenLater_Andalouse_3:24',
        'favourite_In To The Night_3:58',
        'favourite_Live It Up_3:48',
        'listenLater'
    ]
)


