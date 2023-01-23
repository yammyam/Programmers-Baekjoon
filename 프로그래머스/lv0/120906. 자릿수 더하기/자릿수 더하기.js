function solution(n) {
    let temp = n + '';
    let answer = temp.split("");
    let sum=0;
    for(let i = 0 ; i<answer.length ; i++){
        sum += Number(answer[i]);
    }
    return sum;
}