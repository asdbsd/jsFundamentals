function softUniReception(elements) {
    let studentsCount = Number(elements[3]);
    let [firstEmployeeEfficiency, secondEmployeeEfficiency, thirdEmployeeEfficiency] = elements.map(Number).filter((e) => elements.indexOf(e) < 3);
    let efficiencyPerHour = firstEmployeeEfficiency + secondEmployeeEfficiency + thirdEmployeeEfficiency;
    let timeNeeded = 0;

    for (let i = studentsCount; i > 0;) {
        timeNeeded++;

        if (timeNeeded % 4 === 0) {
            continue;
        } else {
            i -= efficiencyPerHour;
        }
    }
    console.log(`Time needed: ${timeNeeded}h.`);
}

softUniReception(['5','6','4','0']);
console.log('----------------')
softUniReception(['1','2','3','45']);
console.log('----------------')
softUniReception(['3','2','5','40']);