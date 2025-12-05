
console.log("Working... Genre Page");

//Text Box 1 hide + Play 1 appear on click 
document.querySelector(".dot-btn-1").addEventListener("click", function () {
   document.querySelector(".text-box-1").style.visibility = "hidden";
   document.querySelector(".play-1").style.display = "block";
})

//Choice 1
//------------------------------------------------------------------------------------

function dis1 () { 
    document.querySelector(".play-1").style.display = "none";
}

//Art Hide + text-box-2-op-a appear on click
document.querySelector(".genre-box-1").addEventListener("click", function () {
    dis1();
    document.querySelector(".text-box-2-op-a").style.visibility = "visible";
 })

//Gaming Hide + text-box-2-op-b appear on click
document.querySelector(".genre-box-2").addEventListener("click", function () {
    dis1();
    document.querySelector(".text-box-2-op-b").style.visibility = "visible";
 })

 //Makeup Hide + text-box-2-op-c appear on click
 document.querySelector(".genre-box-3").addEventListener("click", function () {
    dis1();
    document.querySelector(".text-box-2-op-c").style.visibility = "visible";
 })

 //Lifestyle Hide + text-box-2-op-d appear on click
 document.querySelector(".genre-box-4").addEventListener("click", function () {
    dis1();
    document.querySelector(".text-box-2-op-d").style.visibility = "visible";
 })
