document.getElementById("modeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    this.textContent = "Light Mode";
  } else {
    this.textContent = "Dark Mode";
  }
});
