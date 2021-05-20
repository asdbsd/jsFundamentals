function reverseString (string) {
    let stringInArray = string.split("");
    let reversedStringInArray = stringInArray.reverse();
    let finalString = reversedStringInArray.join("");

    console.log(finalString);
}

reverseString("Hello")