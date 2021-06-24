function sortArrayByTwoCriteria(strings) {
    function compare(a, b) {
        if (a.length - b.length < 0) {
            return a.length - b.length;
        } else if (a.length - b.length > 0) {
            return a.length - b.length;
        } else {
            return a.localeCompare(b);
        }
    }



    console.log(strings.sort(compare).join('\n'));
}

sortArrayByTwoCriteria(["alpha", "beta", "gamma"])
sortArrayByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);