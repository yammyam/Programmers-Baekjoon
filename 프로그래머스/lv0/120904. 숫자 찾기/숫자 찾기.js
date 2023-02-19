function solution(num, k) {
    let strNum = num.toString();
    let arrNum = strNum.split("")
    let findNum = k.toString();
    for(let i = 0 ; i < arrNum.length; i++){
        if(arrNum[i]===findNum)
         return i+1;
    }
    return -1;
}