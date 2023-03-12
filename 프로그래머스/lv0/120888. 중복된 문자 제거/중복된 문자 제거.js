function solution(my_string) {
     const stringArr = my_string.split("");
    
    const noOverlay = Array.from(new Set(stringArr));
    
    return noOverlay.join("");
    // let obj = {}
    // for(let i = 0; i < my_string.length; i++){
    //     if(my_string[i]){
    //         obj[my_string[i]]++;
    //     }
    //     else{
    //         obj[my_string[i]] = 1;
    //     }
    // }
    // let str=""
    // for(let i in obj){
    //     if(obj[i]<2){
    //         str+=obj[i];
    //     }
    // }
    // return str;
}