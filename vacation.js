function vacation(customerNum, groupType, groupDay) {
    let numberOfPeople = Number(customerNum);
    let customerType = groupType;
    let dayOfWeek = groupDay;
    let currentPrice = 0;
    let totalSum = 0;

    switch (customerType) {

        case "Students":
            switch (dayOfWeek) {
                case "Friday":
                    currentPrice = 8.45;
                break;
                case "Saturday":
                    currentPrice = 9.8;
                break;
                case "Sunday":
                    currentPrice = 10.46;
                break;
            }

            totalSum = numberOfPeople * currentPrice;
            if (numberOfPeople >= 30) {
                totalSum -= totalSum * 0.15;
            } else {
                totalSum;
            }
        break;

        case "Business":
            switch (dayOfWeek) {
                case "Friday":
                    currentPrice = 10.90;
                break;
                case "Saturday":
                    currentPrice = 15.60;
                break;
                case "Sunday":
                    currentPrice = 16;
                break;
            }

            totalSum = numberOfPeople * currentPrice;
            if (numberOfPeople >= 100) {
                totalSum -= currentPrice * 10;
            } else {
                totalSum;
            }
        break;

        case "Regular" :
            switch (dayOfWeek) {
                case "Friday":
                    currentPrice = 15;
                break;
                case "Saturday":
                    currentPrice = 20;
                break;
                case "Sunday":
                    currentPrice = 22.50;
                break;
            }

            totalSum = numberOfPeople * currentPrice;
            if (numberOfPeople >= 10 && numberOfPeople <= 20) {
                totalSum -= totalSum * 0.05;
            } else {
                totalSum;
            }
        break;
    }

    console.log(`Total price: ${totalSum.toFixed(2)}`);
}

vacation(40,
    "Regular",
    "Saturday"
    );