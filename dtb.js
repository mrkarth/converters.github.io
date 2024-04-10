let btn1=document.getElementById("btn1");
let dec=document.getElementById("dec");
let res1=document.getElementById("res1");

let z;
btn1.onclick=function(){
    z=document.getElementById("dec").value;
    z=Number(z);
    m=z.toString(2);
    res1.textContent=`The Binary Number Is : ${m}`;
}

