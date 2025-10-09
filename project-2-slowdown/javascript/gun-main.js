console.log("If you are see this, you shouldn't be looking at peoples code! :P Is private, Dear Hacker!");



document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".sign-btn").addEventListener("click", () => {
    document.querySelector(".sign-complete").classList.add("visible");
  });
});
