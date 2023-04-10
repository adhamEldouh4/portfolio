let form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let inputs = document.querySelectorAll("form input");
  let textArea = document.querySelector("textarea");
  inputs.forEach((input) => {
    if (input.value == "" || textArea.value == "") {
      console.log("no");
      Swal.fire({
        title: "Error!!!",
        text: "Do you want to continue",
        icon: "error",
        confirmButtonText: "Okay",
      });
    } else {
      Swal.fire({
        title: "Success",
        text: "Thank You",
        icon: "success",
        confirmButtonText: "Cancel",
      });
    }
  });
});
