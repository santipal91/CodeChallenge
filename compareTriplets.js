
const compareTriplets = (a, b) => {
    let result = [];
    let contA = 0;
    let contB = 0;

    for (i = 0; i < a.length; i++) {
        if ( a[i] > b[i] ) {
            contA+=1 
        } else if ( a[i] < b[i]) {
            contB+=1
        } 
    };

    result[0] = contA;
    result[1] = contB;

    return result

};

console.log(compareTriplets([2, 2, 3], [1, 2, 6]))