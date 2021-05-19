function theatrePromotions(ticketDay, age) {
    let day = ticketDay;
    let customerAge = Number(age);

    if (customerAge >= 0 && customerAge <= 18) {
        switch(day) {
            case 'Weekday': console.log('12$'); break;
            case 'Weekend': console.log('15$'); break;
            case 'Holiday': console.log('5$');  break;
        }
    } else if (customerAge > 18 && customerAge <= 64) {
        switch(day) {
            case 'Weekday': console.log('18$'); break;
            case 'Weekend': console.log('20$'); break;
            case 'Holiday': console.log('12$');  break;
        }
    } else if (customerAge > 64 && customerAge <= 122) {
        switch(day) {
            case 'Weekday': console.log('12$'); break;
            case 'Weekend': console.log('15$'); break;
            case 'Holiday': console.log('10$');  break;
        }
    } else {
        console.log('Error!');
    }
}

theatrePromotions('Holiday', -12)