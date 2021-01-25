function insert(){
    let k = 0;
    let array = [];
    item = document.getElementById("val").value;
    array.unshift(item);
    return array;
}

function display(){
    array = insert();
    for (i = 0; i < array.length; i++){
        document.write("Element "+i+" = "+array[i]);
    }
}