function lcm_two_numbers(num1,num2){
    let prod = 0,lcm = 0;
    prod = num1*num2;
    for(let i = 2; i <= prod; i++){
        if(prod%i == 0){
            if((i%num1 == 0) && (i%num2 ==0)){
                lcm = i;
                break;
            }
        }
    }
    return lcm;
}

console.log(lcm_two_numbers(27,36));
console.log(lcm_two_numbers(15,25));