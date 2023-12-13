function solution(names) {
    let answer = [];
    for(let i=0;i<names.length;i++)
        {
            if((i+1)%5===1){
                answer.push(names[i])
            }
        }
    return answer;
}