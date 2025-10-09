console.log("If you are see this, you shouldn't be looking at peoples code! :P Is private, Dear Hacker!");

document.querySelectorAll(".c-close-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const box = btn.closest("div[class^='cbox']");
    if (box) box.classList.add("hidden");
  });
});