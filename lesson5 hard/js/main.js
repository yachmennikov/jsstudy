'use strict';

let arr = ['21', '34', '75', '46', '57', '98', '19']; 



arr.filter( (item) => {
      if (item[0] === '2' || item[0] === '4') {
        console.log(item);
      }
    });


let n = 100;

nextPrime:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }

 console.log(i); 
}








// alternative method
// arr.forEach( (item) => {
//     if (item.startsWith('2') || item.startsWith('4')) {
//       console.log(item);
//     }
//   });