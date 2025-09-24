console.log("Hello Hello"); 

let pageTitle = document.querySelector("#page-title")


//3s Time Color---------------------------------------/
setTimeout(function(){ 
    pageTitle.style.color = "darkblue"
    console.log("Time Test")
}, 3000)

//Button Click Back Color Change ---------------------------------------------------------------/
document.querySelector('.button').onclick = function () { 
    console.log("Button Clicked");
    document.querySelector("body").style.backgroundColor = "blue";
}

//Image Disappear ---------------------------------------------------------------/
document.querySelector("#img-0").addEventListener("click", function () {
   document.querySelector("#img-0").style.display = "none";
   alert("CA CAWK")
})
document.querySelector("#img-1").addEventListener("click", function () {
   document.querySelector("#img-1").style.display = "none";
})
document.querySelector("#img-2").addEventListener("click", function () {
   document.querySelector("#img-4").style.visibility = "visible";
})
document.querySelector("#img-3").addEventListener("click", function () {
   document.querySelector("#img-2").style.visibility = "visible";
})
document.querySelector("#img-3").addEventListener("click", function () {
   document.querySelector("#img-3").style.visibility = "hidden";
})
document.querySelector("#img-4").addEventListener("click", function () {
   document.querySelector("#img-3").style.visibility = "visible";
})
document.querySelector("#img-5").addEventListener("click", function () {
   document.querySelector("#img-5").style.visibility = "hidden";
})
document.querySelector("#img-6").addEventListener("click", function () {
   document.querySelector("#img-7").style.visibility = "visible";
})
document.querySelector("#img-7").addEventListener("click", function () {
   document.querySelector("#img-2").style.visibility = "visible";
})