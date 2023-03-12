// Get the switch and the HTML body element
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const body = document.querySelector('body');

// Function to change the website background color to dark mode
function toggleDarkMode() {
  body.classList.toggle('dark-mode');
}

// Add an event listener to the switch
darkModeToggle.addEventListener('change', toggleDarkMode);
