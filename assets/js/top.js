let btn = document.getElementById("top");

window.addEventListener("scroll", function () {
  if (this.window.scrollY > 150) {
    btn.classList.replace("d-none", "d-flex");
    btn.addEventListener("click", function () {
      window.scrollTo(0, 0);
      
    });
  }
  else{
    btn.classList.replace("d-flex", "d-none");

  }
});
