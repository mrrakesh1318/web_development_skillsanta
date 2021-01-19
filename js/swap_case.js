document.write("Swapping lowercase to uppercase and vice-versa <br>")

function case_swap(str){
    var str2 = '';
    for (i = 0; i < str.length; i++){
        c = str.charAt(i);
        if (c == c.toLowerCase())
        str2 =str2+c.toUpperCase();
        else
        str2 =str2+c.toLowerCase();
    }
    return str2;
}
document.write(case_swap("hELLO "));
document.write(case_swap("SkillSanta"));
document.write("<hr>");
