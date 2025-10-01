console.log("Hello Hello");


//Closing Ads---------------------------------------/

document.querySelectorAll(".close").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.closest("div[class^='box-']").style.display = "none";
    });
});