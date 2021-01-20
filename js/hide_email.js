function protect_email(s)
{
    s1 = s.split("@");
    part = s1[0].substring(0,s1[0].length/2)+'...';
    return (document.write(part+"@"+s1[1]));
}

protect_email("eddygrant@example.com");

document.write("<hr>")