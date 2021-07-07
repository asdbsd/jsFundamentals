function bonusScoringSystem(elements) {
    let studentsCount = Number(elements.shift());
    let lecturesCount = Number(elements.shift());
    let courseBonus = Number(elements.shift());
    let countOfAttendancesPerStudent = elements.map(Number);
    let maxBonus = 0;
    let maxAttendedLectures = 0;

    for(let studentAttendance of countOfAttendancesPerStudent) {
        currentBonus = studentAttendance / lecturesCount * (5 + courseBonus);

        if (currentBonus < maxBonus) {
            continue;
        } else {
            maxAttendedLectures = studentAttendance;
            maxBonus = currentBonus
        }
    }

    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`)
    console.log(`The student has attended ${maxAttendedLectures} lectures.`)
}

bonusScoringSystem(['5', '25', '30', '12', '19', '24', '16', '20']);
console.log('----------------------------')
bonusScoringSystem(['10', '30','14', '8','23','27','28','15','17','25','26','5','18'])
console.log('----------------------------')
bonusScoringSystem([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ]
)
console.log('----------------------------')
bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ]
  )