const minMaxSum = (arr) => {
    let numMax = Math.max(...arr);
    let numMin = Math.min(...arr);

    let sum = arr.reduce((a, b) => a + b);

    console.log((sum-numMax), (sum-numMin))

}

minMaxSum([1, 3, 4, 5, 7]);