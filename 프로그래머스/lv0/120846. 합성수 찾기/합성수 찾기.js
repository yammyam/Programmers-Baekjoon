function solution(n) {
    let count = 0;
    let recount = 0;
    for(let i = 4 ; i<=n ; i++){
        for(let j = 1 ; j<=i ; j++){
            if(i%j===0)
                count++;
        }
        if(count>=3)recount++;
        count = 0;
    }
    return recount;
}