function solution(array) {
  let newarr=array.sort(function (a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  });
  return newarr[(newarr.length-1)/2]
}