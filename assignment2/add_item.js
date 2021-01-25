array = [];
function insert(){
    item = document.getElementById("val").value;
    array.unshift(item);
    document.getElementById("val").value = '';
}

//array = array.reverse();

function display(){
    for (i = 0; i < array.length; i++){
        document.write("Element "+i+" = "+array[i]);
        document.write("<br>");
    }
}