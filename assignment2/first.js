document.write("creating a string from an array <br>");
var myColor =["Red","Green","White","Black"];
var str ='';

for (i = 0; i < myColor.length; i++){
    str =str+myColor[i]+',';
}
document.write(str);
document.write("<hr>");