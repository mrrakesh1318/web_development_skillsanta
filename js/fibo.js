document.write("Fibonacci Series " + "<br>");

function Fibonacci(n){
    var a = 0, b = 1, next = 0;
    for (i = 1; i <= n; i++){
        document.write(a+",");
        next = a+b;
        a = b;
        b = next;
    } 
}

Fibonacci(8);

document.write("<hr>");
