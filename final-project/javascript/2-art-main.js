
console.log("Working... Artist Page");

function dis2 () { 
    document.querySelector(".play-2").style.display = "none";
}

//Text Box 2 hide + Play 2 appear on click 
document.querySelector(".dot-btn-2").addEventListener("click", function () {
   document.querySelector(".text-box-2").style.visibility = "hidden";
   document.querySelector(".play-2").style.display = "block";
})


//Choice 1 Hide + Route 1 appear on click
document.querySelector(".genre-box-a1").addEventListener("click", function () {
    dis2();
    document.querySelector(".route-1").style.display = "block";
 })

 document.querySelector(".genre-box-a2").addEventListener("click", function () {
    dis2();
    document.querySelector(".route-2").style.display = "block";
 })