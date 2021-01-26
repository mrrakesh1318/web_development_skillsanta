function removeSelected(){
    x = document.getElementById("colorSelect");
    //document.write(x+"<br>");
    x.remove(x.selectedIndex);
    //document.getElementById("colorSelect").removeChild(x);
}