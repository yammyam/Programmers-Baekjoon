let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
let a = Number(input[0]);
for(let i = 1; i <= 9; i++){
    console.log(`${a} * ${i} = ${a*i}`)
}