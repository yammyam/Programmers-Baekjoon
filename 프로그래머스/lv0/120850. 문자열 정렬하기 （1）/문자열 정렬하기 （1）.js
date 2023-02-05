function solution(my_string) {
  let regex = /[^0-9]/g;
  let numArr = my_string.replace(regex, "");
  let res = numArr.split('')
  let newarr1=[];
  for(let i = 0 ; i<res.length ; i++){
    newarr1.push(Number(res[i]))
}
  let newarr2 = newarr1.sort(function (a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  });
  return newarr2;
}