console.log("Hello Hello");


//Closing Ads---------------------------------------//
document.querySelectorAll(".close").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.closest("div[class^='box-']").style.display = "none";
    });
});

//Pay Error Box 17---------------------------------------//
document.querySelector(".b17-text").addEventListener("click", function () {
    alert("This Call Number is Currently Unavailable...")
})

//Pay Error Box 18---------------------------------------//
document.querySelector(".b18-btn").addEventListener("click", function () {
    alert("Not Enough Funds...")
})

//Click Reschedule Box 23------------------------//
document.querySelector(".btn-reschedule").addEventListener("click", function () {
    document.querySelector(".box-23-reschedule").style.visibility = "visible";
    document.querySelector(".box-23").style.visibility = "hidden";
})

//Click Error Box 28------------------------//

document.querySelector(".b28-error").addEventListener("click", function () {
    alert("Oh No, I Don't have the Energy To Work... ")
})

