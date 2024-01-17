const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  console.log(formData);
});
