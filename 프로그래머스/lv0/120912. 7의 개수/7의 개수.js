function solution(array) {
    let seven = array.join('').split('');
    let count = 0;
    for(let i = 0 ; i < seven.length ; i++){
        if(seven[i] === '7')
            count++;
    }
    return count;
}