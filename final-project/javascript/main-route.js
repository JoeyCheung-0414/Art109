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