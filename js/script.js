document.addEventListener("DOMContentLoaded", () => {
  let searchButton = document.querySelector(".form-title");
  searchButton.addEventListener("click", () => {
    let form = document.getElementById("search-id");
    form.style.display = "block";
  });
});
