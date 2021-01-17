var n =6;

for (let i = 0; i <= n; i++) {
    let c = 0;
    for (let j = 1; j<=i; j++){
        if (i%j == 0)
        c++;
    }
    if (i%2 == 0){
        if (i!=0 && c<=2)
        document.write(i+" is even and prime"+"<br>");
        else
        document.write(i+" is even"+"<br>");    
    }
    else{
        if (c<=2)
        document.write(i+" is odd and prime"+"<br>");
        else
        document.write(i+" is odd"+"<br>");
    }
}
document.write("<hr>")