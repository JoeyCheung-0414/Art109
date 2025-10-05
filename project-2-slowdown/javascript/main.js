console.log("Hello Hello");


//Closing Ads---------------------------------------//

document.querySelectorAll(".close").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.closest("div[class^='box-']").style.display = "none";
    });
});

//Pay Error Box 25---------------------------------------//
document.querySelector(".b25-btn").addEventListener("click", function () {
    alert("Not Enough Funds...")
})

//Click Reschedule Box 30------------------------//
document.querySelector(".btn-reschedule").addEventListener("click", function () {
    document.querySelector(".box-30-reschedule").style.visibility = "visible";
    document.querySelector(".box-30").style.visibility = "hidden";
})



//Click Error Box 35------------------------//

document.querySelector(".b35-error").addEventListener("click", function () {
    alert("Oh No, I Don't have the Energy To Work... ")
})

