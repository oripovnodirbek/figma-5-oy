document.addEventListener("DOMContentLoaded", function () {
  const modeToggle = document.getElementById("modeToggle");
  const body = document.body;
  const image1 = document.getElementById("image1");
  const image2 = document.getElementById("image2");
  const modeIcon = document.querySelector(".mode-icon");

  let darkMode = true;
  let currentLanguage = 0;
  const languages = ["English", "Ozbek", "Ruscha"];

  const imagePaths = {
    English: {
      dark: ["DARK.svg", "LIGHT.svg"],
      light: ["DARK (1).svg", "power.svg"],
    },
    Ozbek: {
      dark: ["DARK.svg", "LIGHT.svg"],
      light: ["DARK (1).svg", "power.svg"],
    },
    Ruscha: {
      dark: ["DARK.svg", "LIGHT.svg"],
      light: ["DARK (1).svg", "power.svg"],
    },
  };

  function updateImages() {
    const mode = darkMode ? "dark" : "light";
    const lang = languages[currentLanguage];
    image1.src = imagePaths[lang][mode][0];
    image2.src = imagePaths[lang][mode][1];
  }

  modeToggle.addEventListener("click", function () {
    darkMode = !darkMode;
    body.classList.toggle("light-mode", !darkMode);
    modeIcon.textContent = darkMode ? "🌙" : "☀️";
    updateImages();
  });

  const languageToggle = document.getElementById("languageToggle");
  const caption1 = document.getElementById("caption1");
  const caption2 = document.getElementById("caption2");
  languageToggle.addEventListener("click", function () {
    currentLanguage = (currentLanguage + 1) % languages.length;
    caption1.textContent = languages[currentLanguage];
    caption2.textContent = languages[currentLanguage];
  });
});
