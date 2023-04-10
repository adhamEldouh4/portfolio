let sectionSkills = document.getElementById("skills");

window.addEventListener("scroll", function () {
  if (this.window.scrollY >= sectionSkills.offsetTop - 200) {
    let skills = this.document.querySelectorAll(".skill");
    skills.forEach((skill) => {
      skill.classList.add("active");
    });
  }
});
