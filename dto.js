let btn1=document.getElementById("btn2");
let dec=document.getElementById("oct");
let res1=document.getElementById("res2");

let z;
btn2.onclick=function(){
    z=document.getElementById("oct").value;
    z=Number(z);
    m=z.toString(8);
    res2.textContent=`The Octal Number Is : ${m}`;
}

