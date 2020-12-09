
const divisibleSumPairs = ( arr, n ) => {
    let cont = 0;
        for(i=0; i< arr.length; i++) {
            for (j=(i + 1); j < arr.length; j++) {
                if(arr[i] < arr[j]) {
                    (arr[i] + arr[j])%n === 0 ? cont+=1 : cont;
                    
                }
            }
        }
    return cont;       
        
}

console.log(divisibleSumPairs([1, 2, 3, 4, 5, 6], 5));