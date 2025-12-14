console.log("Working... Route Page");

//Text Box 1  hide + C1 appear on click 
document.querySelector(".btn-1").addEventListener("click", function () {
  document.querySelector(".a-text-1").style.visibility = "hidden";
  document.querySelector(".c1").style.display = "block";
})


//Split 
//------------------------------------------------------------------------------------

function dis1() {
  document.querySelector(".c1").style.display = "none";
}

//C1 Hide + Route-1 appear on click
document.querySelector(".op1").addEventListener("click", function () {
  dis1();
  document.querySelector(".route-1").style.display = "block";
})

//C1 Hide + Route-2 appear on click
document.querySelector(".op2").addEventListener("click", function () {
  dis1();
  document.querySelector(".route-2").style.display = "block";
})


// hide class  
//------------------------------------------------------------------------------------
document.querySelectorAll(".hide").forEach(btn => {
  btn.addEventListener("click", () => {
    const box = btn.closest("div[class^='route-box']");
    if (box) box.classList.add("invisible");
  });
});

//minor Choice 
//mc1 Open 
document.querySelector(".mc1-open").addEventListener("click", function () {
  document.querySelector(".m1").style.display = "block";
})
//mc1 close 
document.querySelector(".mc1-close").addEventListener("click", function () {
  document.querySelector(".m1").style.display = "none";
})

//mc2 Open 
document.querySelector(".mc2-open").addEventListener("click", function () {
  document.querySelector(".m2").style.display = "block";
})

//mc2 close 
document.querySelector(".mc2-close").addEventListener("click", function () {
  document.querySelector(".m2").style.display = "none";
})