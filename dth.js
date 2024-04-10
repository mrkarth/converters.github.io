let btn1=document.getElementById("btn3");
let dec=document.getElementById("hex");
let res3=document.getElementById("res3");

let z;
btn3.onclick=function(){
    z=document.getElementById("hex").value;
    z=Number(z);
    m=z.toString(16);
    res3.textContent=`The Hexadecimal Number Is : ${m.toUpperCase()}`;
}

