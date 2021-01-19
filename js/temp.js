document.write("Temperature conversion <br>");

function cel_to_fah(cel){
    let fah = ((9*cel)/5)+32;
    document.write("Temperature in Celsius "+cel+"<br>");
    document.write("Temperature in Fahrenheit "+fah+"<br>");
    document.write("<br>");
}

function fah_to_cel(fah){
    let cel = (5/9)*(fah-32);
    document.write("Temperature in Fahrenheit "+fah+"<br>");
    document.write("Temperature in Celsius "+cel+"<br>");
    document.write("<br>");
}

cel_to_fah(37);
fah_to_cel(212);

