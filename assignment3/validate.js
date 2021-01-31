function validateCreditCard(card){
    let card_num_sum = 0;
    //console.log(card.charAt(card.length-1));
    if(card.length == 16){
        for(i = 0; i < card.length; i++){
            let c = card.charAt(i);
            if(!isNaN(c)){
                let count = 0;
                for(let j = 0; j < card.length; j++){
                    if(c == card.charAt(j))
                    count++;
                }
                // console.log(count);
                if(count == 16)
                    // console.log("False");
                    break;
            }
            else
            break;
            card_num_sum = card_num_sum+Number(c);
        }//End for loop
        if(Number(card.charAt(card.length-1))%2 != 0)
        console.log("False");
        else if(card_num_sum <= 16)
        console.log("False");
        else
        console.log("True");
    }//End if body
    else
    console.log("False");
}
