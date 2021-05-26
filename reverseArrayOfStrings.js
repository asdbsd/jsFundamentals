function reverseArrayOfStrings(items) {
    for (i = 0; i < items.length / 2; i++) {
        swapElements(items, i, items.length - 1 - i);
    }

    console.log(items.join(' '));

    function swapElements(arr, i, j) {
        let newFrontValue = items[j];
        let newBackValue = items[i];
        arr[i] = newFrontValue;
        arr[j] = newBackValue;
    }
}

reverseArrayOfStrings(['a', 'b', 'c', 'd', 'e']);