function solution(num_list) {
    let arr = num_list.sort(function(a, b)  {
    if(a > b) return 1;
    if(a === b) return 0;
    if(a < b) return -1;
    });
    return arr.slice(0,5);
}