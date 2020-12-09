// const barraChocolate = (arr, mes, dia) => {
    
//     const barra2 = () => {
//         let cont = 0;
//         for (i = 0; i<arr.length; i++) {
//             if ((arr[i] + arr[i + 1]) === dia) {
//                 cont+=1;
//             }
//         }
//         arr.map()
        
//     }

//     return arr.length < mes ? 0: barra2();
    
// };

// console.log(barraChocolate([1, 2, 3, 2, 1], 2, 4))

let arr = [1, 2, 1, 3, 2, 1]
let arr2 = []
let b = 2;
   for(i=0; i<arr.length; i+=1) {
      if (b <= arr.length) {
         arr2[i] = arr.slice(i, b);
         
         console.log(i)
         console.log(b)
         b+=1;
      }
      
   
      // console.log(arr2[i].reduce((a, b) => {
      //    return a + b;
      // }))
   }
   
console.log(arr2)