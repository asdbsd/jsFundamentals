function schoolGrades(stringElements) {

    let students = new Map();

    for (let string of stringElements) {
        let student = string.split(' ');
        let name = student[0];
        let grades = student
                    .splice(1, student.length)
                    .map(Number);

        if (!students.has(name)) {
            students.set(name, []);
            students.set(name, students.get(name).concat(grades));
        } else {
            students.set(name, students.get(name).concat(grades));
        }

        
    }

    let sorted = Array.from(students).sort((a, b) => averageGrade(a, b));


    function averageGrade(a, b) {
        let aSum = 0;
        for (let i = 0; i < a[1].length; i++) {
            aSum += a[1][i];
        }
        
        let bSum = 0;
        for (let i = 0; i < b[1].length; i++) {
            bSum += b[1][i];
        }

        let aAverage  = aSum / a[1].length;
        let bAverage = bSum / b[1].length;

        return aAverage - bAverage;
    }

    let result = [];
    sorted.map( person => result.push( `${person[0]}: ${person[1].join(', ')}`));

    return result.join('\n');

}

console.log(
    schoolGrades(
        [
            'Lilly 4 6 6 5',
            'Tim 5 6',
            'Tammy 2 4 3',
            'Tim 6 6'
        ]

    )
)