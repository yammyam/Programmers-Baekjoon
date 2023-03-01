function solution(n) {
    let res = 1;
    let count =0;
    for(let i = 1 ; i <= 3628800; i++){
        if(res <= n){
            res = res * i
            count = i;
        }
    }
    return count-1
}