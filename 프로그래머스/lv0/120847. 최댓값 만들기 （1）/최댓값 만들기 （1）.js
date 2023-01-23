function solution(numbers) {
    let newarr=numbers.sort(function (a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  });
    return newarr[newarr.length-1]*newarr[newarr.length-2];
}