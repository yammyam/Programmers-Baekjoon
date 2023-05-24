let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const num1 = input[0].split(""); [4,5,9]
const num2 = input[1].split("");
console.log(Number(input[0])*Number(num2[2]));
console.log(Number(input[0])*Number(num2[1]));
console.log(Number(input[0])*Number(num2[0]));
console.log(Number(input[0]) * Number(input[1]));