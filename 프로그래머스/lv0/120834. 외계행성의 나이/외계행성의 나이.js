function solution(age) {
    let answer = [];
    let leng = age.toString();
    let alp = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    for(let i = 0 ; i<leng.length ; i++){
        answer.push(alp[leng[i]]);
    }
    return answer.join("");
}