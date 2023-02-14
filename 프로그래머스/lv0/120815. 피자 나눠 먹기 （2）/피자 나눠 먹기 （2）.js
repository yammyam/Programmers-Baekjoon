function solution(n) {
    //n명이 * 6조각 끝
    for(let i = 1; i<= 600 ; i++){
        if((i*6)%n === 0){
           return i;
        }
    }
}