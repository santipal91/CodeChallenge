const mult = (arr) => {
    let arr2 = arr.sort();
    let cont = 0;

    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] == arr2[i + 1]) {
            cont+=1
            i+=1
        }
        
        
    }
    return cont
}

console.log(mult([10, 5, 7]))