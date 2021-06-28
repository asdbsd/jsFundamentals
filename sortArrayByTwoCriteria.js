function sortArrayByTwoCriteria(strings) {

    console.log(strings.sort((a,b) => a.length - b.length || a.localeCompare(b)).join('\n'));
}

sortArrayByTwoCriteria(["alpha", "beta", "gamma"])
console.log('------------')
sortArrayByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);