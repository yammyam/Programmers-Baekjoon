function solution(array) {
    let count = 0;
    let max = array[0];
    let res = [];
    for(let i = 1 ; i < array.length ; i++){
        if(max<array[i]){
            max = array[i];
            count = i;
        }
    }
    res.push(max);
    res.push(count);
    return res;
}