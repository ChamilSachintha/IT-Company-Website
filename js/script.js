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


  // Scroll sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            // Active navbar links
            navLinks.forEach((links) => {
                links.classList.remove("active");
                document
                    .querySelector("header nav a[href*=" + id + "]")
                    .classList.add("active");
            });
        }
    });

    // Sticky header
    let header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 100);

    // Remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
};