function solution(my_string, n) {
    let res = "";
    for(let i = 0 ; i<my_string.length ; i++){
        for(let k = 0 ; k<n;k++){
            res+=my_string[i]
        }
    }
    return res;
}