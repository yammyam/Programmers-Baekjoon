function solution(num_list, n) {
    let answer = [];
    let l = num_list.length/n;
    for(let i = 0; i < l; i++){
        let str = [];
        for(let j = 0; j < n ; j++){
            str.push(num_list[j]);
        }
        answer.push(str);
        num_list = num_list.slice(n);
    }
    return answer;
}