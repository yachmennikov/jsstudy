let num = 266219,
    output = [];

num = num.toString();

for (let i = 0; i < num.length; i++) {
    output.push(num[i]);
}

output = output.reduce( function(sum, current) {
    return sum * current;
});

console.log(output);

output = output ** 3;
console.log(output);
output = output.toString();
console.log(output[0] + output[1]);






