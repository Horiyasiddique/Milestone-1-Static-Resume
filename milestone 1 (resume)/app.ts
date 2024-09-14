const toggleButton = document.querySelector("button") as HTMLButtonElement;
const hideSkills = document.querySelector("#skills") as HTMLElement;

toggleButton.addEventListener("click", () => {
  if (hideSkills) {
    if (hideSkills.style.display === "none") {
      hideSkills.style.display = "block";
    } else {
      hideSkills.style.display = "none";
    }
  }
});

