
const pageCount = (n, p) => {
    let arr = [];
    let cont = 0;

    for(i=0; i<=n; i++){
        arr.push(i);
    }

    for(i=0; i<=n; i++) {
        if(arr[i]=== p) {
            return Math.floor((cont/2))
        } else {
            cont+=1;
        }
    }

}

console.log(pageCount(5, 1))