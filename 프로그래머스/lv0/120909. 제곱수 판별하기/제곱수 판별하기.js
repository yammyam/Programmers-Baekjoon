function solution(n) {
   for(let i = 1; i<1_000_000;i++){
       if(Math.pow(i,2)===n)
           return 1;
   }
    return 2;
}