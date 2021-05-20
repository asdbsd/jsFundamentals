function nextDay(year, month, day) {
    let startDate = new Date(year, month - 1, day);
    let finalDate = new Date(year, month - 1, day);
    finalDate.setDate(startDate.getDate() + 1);

    let dateInString = finalDate.toLocaleDateString("en-US").split("/");

    console.log(`${dateInString[2]}-${dateInString[0]}-${dateInString[1]}`);
}

nextDay(2016, 9, 30);