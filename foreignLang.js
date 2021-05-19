function foreignLang(countryCode) {
    let country = countryCode;

    switch(countryCode) {
        case "USA":       console.log("English"); break;
        case "England":   console.log("English"); break;
        case "Spain":     console.log("Spanish"); break;
        case "Argentina": console.log("Spanish"); break;
        case "Mexico":    console.log("Spanish"); break;
        default:          console.log("unknown"); break;
    }
}

foreignLang("Maroco");


// USA England Spain Argentina Mexico