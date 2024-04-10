let btn=document.getElementById("btn");
let bin=document.getElementById("bin");
let res=document.getElementById("res");


let x;
btn.onclick=function(){
    x=document.getElementById("bin").value;
    k=parseInt(x,2);
    res.textContent=`The Decimal Number Is : ${k}`;
}