function solution(my_string) {
    let sum = 0 ;
    const regex = /[^0-9]/g;
    const result = my_string.replace(regex, "");
    for(let i = 0 ; i < result.length ; i++){
        sum += Number(result[i]);
    }
    return sum;
}