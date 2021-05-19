function studentInfo(name, age, grade) {
    let studentName = name;
    let studentAge = age;
    let studentGrade = Number(grade).toFixed(2);

    console.log(`Name: ${studentName}, Age: ${studentAge}, Grade: ${studentGrade}`);
}


studentInfo("Dobriyan", 15, 5.20)

// Name: John, Age: 15, Grade: 5.55