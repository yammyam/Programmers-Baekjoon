function solution(n) {
    let resArr = [];
    for(let i = 1 ; i<=n ; i++){
        if(n%i === 0)
            resArr.push(i);
    }
    return resArr;
}