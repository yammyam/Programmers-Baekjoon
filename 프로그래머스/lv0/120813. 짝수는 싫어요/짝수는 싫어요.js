function solution(n) {
    let arr=[];
    for(let i = 1 ; i<=n ; i++){
        arr[i]=i;
    }
    return arr.filter(function(el){
        return el%2===1;
    });
}