


console.log("Working... End Credit Page");

//E1 Text  hide + E2 appear on click 
document.querySelector(".btn-e1").addEventListener("click", function () {
   document.querySelector(".e1-text").style.visibility = "hidden";
   document.querySelector(".e2-text").style.display = "block";
})

//E2 Text  hide + Warning appear on click 
document.querySelector(".btn-e2").addEventListener("click", function () {
   document.querySelector(".e2-text").style.visibility = "hidden";
   document.querySelector(".warning").style.display = "block";
})

//Warning hide + E Menu 1 Appear on click 
document.querySelector(".warning-close").addEventListener("click", function () {
   document.querySelector(".warning").style.visibility = "hidden";
   document.querySelector(".e-menu1").style.display = "block";
})


// Menu Hide and Visible 
function Menu1Hide () { 
    document.querySelector(".e-menu1").style.display = "none";
}
function Menu1Vis () { 
    document.querySelector(".e-menu1").style.display = "block";
}

function Menu2Hide () { 
    document.querySelector(".e-menu2").style.display = "none";
}
function Menu2Vis () { 
    document.querySelector(".e-menu2").style.display = "block";
}

//E Menu 1 hide + E Menu 2 Appear on click 
document.querySelector(".arrow1").addEventListener("click", function () {
   Menu1Hide();
   document.querySelector(".e-menu2").style.display = "block";
   Menu2Vis ();
})

//E Menu 2 hide + E Menu 1 Appear on click 
document.querySelector(".arrow2").addEventListener("click", function () {
   Menu2Hide ();
   Menu1Vis();
})


//Choices//------------------------------------------------------------------------------------
//Back Btn to Menu 1
document.querySelector(".back-btn-1").addEventListener("click", function () {
   Menu1Vis();
   document.querySelector(".cr1").style.display = "none";
})

document.querySelector(".back-btn-2").addEventListener("click", function () {
   Menu1Vis();
   document.querySelector(".cr2").style.display = "none";
})

document.querySelector(".back-btn-3").addEventListener("click", function () {
   Menu1Vis();
   document.querySelector(".cr3").style.display = "none";
})

document.querySelector(".back-btn-4").addEventListener("click", function () {
   Menu1Vis();
   document.querySelector(".cr4").style.display = "none";
})

//Back Btn to Menu 2
document.querySelector(".back-btn-5").addEventListener("click", function () {
   Menu2Vis();
   document.querySelector(".cr5").style.display = "none";
})

document.querySelector(".back-btn-6").addEventListener("click", function () {
   Menu2Vis();
   document.querySelector(".cr6").style.display = "none";
})

document.querySelector(".back-btn-7").addEventListener("click", function () {
   Menu2Vis();
   document.querySelector(".cr7").style.display = "none";
})

document.querySelector(".back-btn-8").addEventListener("click", function () {
   Menu2Vis();
   document.querySelector(".cr8").style.display = "none";
})

//Hide Menu 1 + creator 1 Appear on click
document.querySelector(".op1").addEventListener("click", function () {
   Menu1Hide();
   document.querySelector(".cr1").style.display = "block";
})

//Hide Menu 1 + creator 2 Appear on click
document.querySelector(".op2").addEventListener("click", function () {
   Menu1Hide();
   document.querySelector(".cr2").style.display = "block";
})

//Hide Menu 1 + creator 3 Appear on click
document.querySelector(".op3").addEventListener("click", function () {
   Menu1Hide();
   document.querySelector(".cr3").style.display = "block";
})

//Hide Menu 1 + creator 4 Appear on click
document.querySelector(".op4").addEventListener("click", function () {
   Menu1Hide();
   document.querySelector(".cr4").style.display = "block";
})

//Hide Menu 2 + creator 5 Appear on click
document.querySelector(".op5").addEventListener("click", function () {
   Menu2Hide();
   document.querySelector(".cr5").style.display = "block";
})

//Hide Menu 2 + creator 6 Appear on click
document.querySelector(".op6").addEventListener("click", function () {
   Menu2Hide();
   document.querySelector(".cr6").style.display = "block";
})

//Hide Menu 2 + creator 7 Appear on click
document.querySelector(".op7").addEventListener("click", function () {
   Menu2Hide();
   document.querySelector(".cr7").style.display = "block";
})

//Hide Menu 2 + creator 8 Appear on click
document.querySelector(".op8").addEventListener("click", function () {
   Menu2Hide();
   document.querySelector(".cr8").style.display = "block";
})