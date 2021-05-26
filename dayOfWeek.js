function dayOfWeek(dayNumber) {
    let daysInWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    console.log(dayNumber <= 0 || dayNumber > daysInWeek.length ? 'Invalid day!' : `${daysInWeek[dayNumber - 1]}`);
}

dayOfWeek(-2)