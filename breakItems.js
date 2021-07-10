function breakItems(elements, entryPoint, priceRating) {
    let itemRatings = elements;
    let entryPriceRating = itemRatings[entryPoint];
    let leftElements = [];
    let rightElements = [];
    let leftSum = 0;
    let rightSum = 0;

    
    switch(priceRating) {
        case 'cheap':
            leftElements = itemRatings.slice(0, entryPoint).filter((e) => e < entryPriceRating );
            rightElements = itemRatings.slice(entryPoint + 1, itemRatings.length).filter((e) => e < entryPriceRating );
            
            leftElements.map((rating) => leftSum += rating);
            rightElements.map((rating) => rightSum += rating);
            break;

        default: 
            leftElements = itemRatings.slice(0, entryPoint).filter((e) => e >= entryPriceRating );
            rightElements = itemRatings.slice(entryPoint +1, itemRatings.length).filter((e) => e >= entryPriceRating );

            leftElements.map((rating) => leftSum += rating);
            rightElements.map((rating) => rightSum += rating)
            break;
    }
    

    if (leftSum >= rightSum) {
        console.log(`Left - ${leftSum}`);
    } else {
        console.log(`Right - ${rightSum}`);
    }


}


breakItems([1, 5, 1], 1, "cheap")
breakItems([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive");
    
    