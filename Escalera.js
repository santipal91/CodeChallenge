const escalera = ( n ) => {
    let arr = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            arr[j] = '';
        }

        arr.fill('#', ((n-1) - i));
        console.log(arr)
        
    }
    
}

console.log(escalera(6))