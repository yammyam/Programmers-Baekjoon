const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);

console.log(((a+b)%c)); //(A+B)%C
console.log(((a%c)+(b%c))%c); //((A%C) + (B%C))%C
console.log((a*b)%c); //(A×B)%C
console.log(((a%c)*(b%c))%c); 
//((A%C) × (B%C))%C