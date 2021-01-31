function date_diff_indays(date1, date2){
    let d1 = Date.parse(date1);
    let d2 = Date.parse(date2);

    diff = d2-d1;
    let diff_days = (diff)/(1000*60*60*24);
    // date = new Date(diff);
    // console.log(date);
    // console.log(diff);
    console.log(diff_days+" days");

}