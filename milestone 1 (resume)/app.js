var toggleButton = document.querySelector("button");
var hideSkills = document.querySelector("#skills");
toggleButton.addEventListener("click", function () {
    if (hideSkills) {
        if (hideSkills.style.display === "none") {
            hideSkills.style.display = "block";
        }
        else {
            hideSkills.style.display = "none";
        }
    }
});
