document.write("Truncating a String ");
document.write("<br>");

function truncate(String, size){
    s = String.split(" ").slice(0,size);
    s =s.join(" ");
    return s;
}

document.write(truncate("The quick brown fox jumps over the lazy dog", 4));

document.write("<hr>")