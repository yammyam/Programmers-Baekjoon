function solution(before, after) {
    // let reverseStr = before.split('').reverse().join('');
    // if(after === reverseStr)
    //     return 1;
    // else
    //     return 0;
    let checkobj1 = {};
    for(let i = 0 ; i < before.length ; i++){
        if(checkobj1[before[i]])
            checkobj1[before[i]]++;
        else
            checkobj1[before[i]]=1;
    }
    let checkobj2 ={}
    for(let i = 0 ; i < after.length; i++){
        if(checkobj2[after[i]])
            checkobj2[after[i]]++;
        else
            checkobj2[after[i]] = 1;
    }
    for(let i = 0 ; i < before.length ; i++){
        if(checkobj1[before[i]] !== checkobj2[before[i]])
            return 0;
    }
    return 1;
}