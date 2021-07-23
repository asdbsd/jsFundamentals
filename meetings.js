function meetings(stringElements) {
    let meetings = {};

    for (let meeting of stringElements) {
        let [day, name] = meeting.split(' ');

        if (!meetings.hasOwnProperty(day)) {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }

    for (let [day, person] of Object.entries(meetings)) {
        console.log(`${day} -> ${person}`);
    }
}

console.log(
    meetings(
        [
            'Monday Peter',
            'Wednesday Bill',
            'Monday Tim',
            'Friday Tim'
        ]
         
    )
)