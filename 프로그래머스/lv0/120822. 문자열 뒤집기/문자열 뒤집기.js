function solution(my_string) {
    let arr = [...my_string];
    let answer = arr.reverse().join("");
    return answer;
}