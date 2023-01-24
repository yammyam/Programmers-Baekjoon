function solution(my_string) {
    let res = '';
    for(let i = 0 ; i<my_string.length;i++){
        if(my_string[i].toUpperCase() !== my_string[i]){
            res = res + my_string[i].toUpperCase();
        }
        else if(my_string[i].toLowerCase() !== my_string[i]){
            res = res + my_string[i].toLowerCase();
        }
    }
    return res;
}