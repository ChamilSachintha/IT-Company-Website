  // Function to set the theme based on the given mode
  function setTheme(mode) {
      if (mode === "dark") {
          document.body.classList.add("dark-theme");
          document.body.classList.remove("light-theme");
          document.getElementById("darkmode-toggle").checked = true;
      } else {
          document.body.classList.add("light-theme");
          document.body.classList.remove("dark-theme");
          document.getElementById("darkmode-toggle").checked = false;
      }
  }

  // Function to toggle the theme and save the mode in local storage
  function toggleTheme() {
      const isDarkMode = document.body.classList.toggle("dark-theme");
      if (isDarkMode) {
          document.body.classList.remove("light-theme");
          localStorage.setItem("theme", "dark");
      } else {
          document.body.classList.add("light-theme");
          localStorage.setItem("theme", "light");
      }
  }

  // Get the theme toggle button
  var icon = document.getElementById("darkmode-toggle");

  // Add an event listener to the toggle button
  icon.onclick = toggleTheme;

  // Check the saved theme mode from local storage and apply it
  window.onload = function () {
      const savedTheme = localStorage.getItem("theme") || "light";
      setTheme(savedTheme);
  };