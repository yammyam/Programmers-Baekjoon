function solution(n, k) {
    let a = [];
    for(let i = 1 ; i<=n;i++){
        if(i%k===0){
            a.push(i);
        }
    }
    return a;
}