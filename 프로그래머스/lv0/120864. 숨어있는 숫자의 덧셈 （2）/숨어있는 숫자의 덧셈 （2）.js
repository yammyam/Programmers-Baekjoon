function solution(my_string) {
    let regex = /[^0-9]/g;
    let result = my_string.replace(regex, " ");
    let nums = result.split(" ");
    let sum = 0;
    if(nums.length === 0)
        return 0;
    for(let i = 0 ; i < nums.length; i++){
        sum += Number(nums[i])
    }
    return sum;
}