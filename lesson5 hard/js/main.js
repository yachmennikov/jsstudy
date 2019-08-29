'use strict';

let arr = ['21', '34', '75', '46', '57', '98', '19']; 

arr.forEach( (item) => {
    if (item.startsWith('2') || item.startsWith('4')) {
      console.log(item);
    }
  });



let simpleNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
for (let i = 0; i < simpleNumbers.length; i++) {
    console.log(simpleNumbers[i] + ' Делители этого числа: 1 и ' + simpleNumbers[i]);
};