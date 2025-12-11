


console.log("Working... Genre Page");

//Text Box 1  hide + C1 appear on click 
document.querySelector(".btn-1").addEventListener("click", function () {
   document.querySelector(".g-text-1").style.visibility = "hidden";
   document.querySelector(".c1").style.display = "block";
})

//Text Box 0  
document.querySelector(".btn-0").addEventListener("click", function () {
   document.querySelector(".g-text-0").style.visibility = "hidden";
   
})

//Warning hide
document.querySelector(".warning-close").addEventListener("click", function () {
   document.querySelector(".warning").style.visibility = "hidden";
})



//Choice 1
//------------------------------------------------------------------------------------

function dis1 () { 
    document.querySelector(".c1").style.display = "none";
}

//Art Hide + c2 text-a appear on click
document.querySelector(".op1").addEventListener("click", function () {
    dis1();
    document.querySelector(".c2-op-1").style.display = "block";
 })

//Gaming Hide + c2 text-b appear on click
document.querySelector(".op2").addEventListener("click", function () {
    dis1();
    document.querySelector(".c2-op-2").style.display = "block";
 })

//Makeup Hide + c2 text-c appear on click
document.querySelector(".op3").addEventListener("click", function () {
    dis1();
    document.querySelector(".c2-op-3").style.display = "block";
 })

//Lifestyle Hide + c2 text-d appear on click
document.querySelector(".op4").addEventListener("click", function () {
    dis1();
    document.querySelector(".c2-op-4").style.display = "block";
 })