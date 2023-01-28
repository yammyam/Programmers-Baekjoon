function solution(n, numlist) {
    let answer = numlist.filter(function(el){
        return el%n === 0;
    });
    return answer;
}