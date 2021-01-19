document.write("Temperature conversion <br>");

function cel_to_fah(cel){
    let fah = ((9*cel)/5)+32;
    document.write(cel+"`C is "+fah+"`F <br>");
    document.write("<br>");
}

function fah_to_cel(fah){
    let cel = (5/9)*(fah-32);
    document.write(fah+"`F is "+cel+"`C <br>");
}

cel_to_fah(37);
fah_to_cel(212);

document.write("<hr>");

