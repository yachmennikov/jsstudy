let num = 266219;

num = num.toString().split('');
console.log(num);

num = num.reduce( (sum, current) => {return sum * current;} );

console.log(num);

num = num ** 3;
console.log(num);
num = num.toString().slice(0, 2);
console.log(num);







