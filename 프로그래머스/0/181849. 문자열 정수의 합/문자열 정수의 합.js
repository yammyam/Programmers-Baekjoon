function solution(num_str) {
    let l = String(num_str);
    let arr = [...l];
    let sum = 0 ;
    for(let i = 0 ; i < l.length; i++){
        sum+=Number(l[i]);
    }
    return sum;
}