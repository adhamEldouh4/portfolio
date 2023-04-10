let dark = document.getElementById("icon");
dark.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  if (localStorage.getItem("theme") == "light") {
    dark.src = "../../Images/sun.png";
    localStorage.setItem("theme", "dark");
  } else {
    dark.src = "../../Images/moon.png";
    localStorage.setItem("theme", "light");
  }
});

if (localStorage.getItem("theme") == "dark") {
  document.body.classList.add("dark");
} else {
  document.body.classList.remove("dark");
}
