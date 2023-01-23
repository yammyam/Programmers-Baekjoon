function solution(sides) {
    let newarr = sides.sort(function (a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  });
    if(newarr[2] < newarr[1]+newarr[0])
        return 1;
    else{
        return 2;
    }
    
}