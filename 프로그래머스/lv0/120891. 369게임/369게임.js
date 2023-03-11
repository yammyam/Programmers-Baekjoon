function solution(order) {
    let str = String(order).split('');
    let count = 0;
    for(let i = 0 ; i <str.length ; i++){
        if(Number(str[i]) % 3 === 0 && Number(str[i]) !== 0)
            count++;
    }
    return count;
}