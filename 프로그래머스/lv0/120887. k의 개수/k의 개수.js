function solution(i, j, k) {
    let count = 0;
    let arr=[];
    for(let x = i ; x <= j ; x++){
        if(x.toString().length < 2)
            arr.push(x.toString())
        else
            arr.push(...x.toString().split(''))
    }
    for(let i = 0 ; i<arr.length; i++){
        if(arr[i].includes(k))
           count++;
    }
    return count;
}