function solution(num_list) {
    const sum = num_list.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0);
    const div = num_list.reduce((acc,cur)=>{
        return acc*cur
    },1);
    if(div < sum**2){
        return 1;
    }
    else{
        return 0;
    }
}