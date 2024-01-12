function solution(numbers, n) {
    let sum = 0;
    let prev = 0;
    for(let i = 0 ; i < numbers.length;i++){
        if(sum > n){
            return prev;
        }
        sum += numbers[i];
        prev += numbers[i];
    }
    return sum;
}