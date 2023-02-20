function solution(my_string) {
    let sortStr1 = my_string.toLowerCase().split('');
    return sortStr1.sort().join('');
}