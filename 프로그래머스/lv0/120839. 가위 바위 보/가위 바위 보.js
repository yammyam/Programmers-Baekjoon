function solution(rsp) {
    let map = {
        "2":"0",
        "0":"5",
        "5":"2",
    };
    
    let res = [];
    for(let i = 0 ; i < rsp.length ; i++){
        res.push(map[rsp[i]]);
    }
    
    return res.join('');
}