function solution(num_list) {
    let sum = 0;
    let div = 1;
    for(let i = 0 ; i< num_list.length;i++){
        sum=sum+num_list[i];
        div = div*num_list[i];
    }
    if(num_list.length>=11){
        return sum;
    }
    else{
        return div;
    }
}