function solution(start, end_num) {
    var answer = [];
    let leng = start - end_num + 1;
    for(let i = start; i >= end_num; i--){
        answer.push(i);
    }
    return answer;
}