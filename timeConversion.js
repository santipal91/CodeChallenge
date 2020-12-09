const timeConversion = (hora) => {
    let arr = hora.slice(0, 8).split(':');
    arr[0] = parseInt(arr[0]);

    hora.includes('AM') ? 
        arr[0] == 12 ? arr[0] = '00' : arr[0] :
        arr[0] == 12 ? arr[0] = '12' : arr[0] = Number(arr[0] + 12)
    return arr.join(':');

};

console.log(timeConversion('10:05:48AM'))
