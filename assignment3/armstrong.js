var num = 371,num1;
var a,arm_num = 0;
num1 = num;
while (num > 0) {
    a = num % 10;
    arm_num = arm_num + Math.pow(a,3);
    num = Math.floor(num/10);
    //console.log(a+" "+num);
}
//console.log(arm_num);
if (num1 == arm_num) document.write("Armstrong number <br>");
//console.log("Armstrong number")
else 
document.write("Not Armstrong number");
//console.log("Not Armstrong number")
