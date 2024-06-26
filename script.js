document.addEventListener("DOMContentLoaded", function () {
  // Elements
  const body = document.body;
  const image1 = document.getElementById("image1");
  const image2 = document.getElementById("image2");
  const modeIcon = document.querySelector(".mode-icon");
  const modeToggle = document.getElementById("modeToggle");
  const languageToggle = document.getElementById("languageToggle");
  const captions = [
    document.getElementById("caption1"),
    document.getElementById("caption2"),
  ];

  let darkMode = true;
  let currentLanguage = 0;
  const languages = ["English", "Ozbek", "Ruscha"];
  const imagePaths = {
    dark: ["DARK.svg", "LIGHT.svg"],
    light: ["DARK (1).svg", "power.svg"],
  };


  function updateTheme() {
    const mode = darkMode ? "dark" : "light";
    body.classList.toggle("light-mode", !darkMode);
    modeIcon.textContent = darkMode ? "🌙" : "☀️";
    image1.src = imagePaths[mode][0];
    image2.src = imagePaths[mode][1];
  }

  function updateLanguage() {
    const lang = languages[currentLanguage];
    captions.forEach((caption) => (caption.textContent = lang));
  }

  modeToggle.addEventListener("click", function () {
    darkMode = !darkMode;
    updateTheme();
  });

  languageToggle.addEventListener("click", function () {
    currentLanguage = (currentLanguage + 1) % languages.length;
    updateLanguage();
  });

  updateTheme();
  updateLanguage();
});


