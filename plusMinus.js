
const plusMinus = (arr) => {
    let contPos = 0;
    let contNeg = 0;
    let contZero = 0;

    arr.forEach(num => {

        switch (true) {
            case (num > 0):
                contPos+=1;
            break;
            case (num < 0):
                contNeg+=1;
            break;
        
            default:
                contZero+=1;
            break;
        };
});

resPos = (contPos/arr.length).toFixed(6);
resNeg = (contNeg/arr.length).toFixed(6);
resZero = (contZero/arr.length).toFixed(6);

return [resPos, resNeg, resZero]
};

console.log(plusMinus([1, -5, 4, 3, 0, -1]));