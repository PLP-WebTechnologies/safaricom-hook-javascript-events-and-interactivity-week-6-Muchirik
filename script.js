// Add a button that toggles the background color of the webpage between two colors
// When the background color is the first color, the button should display the second color, and vice versa
// The button should be styled such that it is visible and easy to click
button = document.getElementById("toggleButton");
button.style.backgroundColor = "blue";
button.style.color = "white";
button.style.padding = "10px";
button.style.border = "none";
button.style.cursor = "pointer";
button.style.fontSize = "16px";
button.style.borderRadius = "5px";
button.style.margin = "10px";
button.style.display = "block";
button.style.width = "100px";
button.style.textAlign = "center";
button.style.textDecoration = "none";
button.style.fontFamily = "Arial";
button.style.fontWeight = "bold";
button.innerText = "White";

button.addEventListener("click", function () {
  // Get the current background color of the webpage
  let currentBackgroundColor = document.body.style.backgroundColor;
  // If the background color is white, change it to light blue
  if (currentBackgroundColor === "white") {
    document.body.style.backgroundColor = "lightblue";
    // Change the button's text to "White"
    button.innerText = "White";
  } else {
    // If the background color is not white, change it to white
    document.body.style.backgroundColor = "white";
    // Change the button's text to "Light Blue"
    button.innerText = "Light Blue";
  }
});

// slider with real time update
const slider = document.getElementById("slider");
const output = document.getElementById("sliderValue");
output.innerHTML = slider.value;
slider.oninput = function () {
  output.innerHTML = this.value;
};

// Add a slider that controls the font size of the paragraph
const fontSizeSlider = document.getElementById("slider2");
const paragraph = document.getElementById("paragraph");
fontSizeSlider.oninput = function () {
  paragraph.style.fontSize = this.value + "px";
};

// Modal with event listener
const modal = document.getElementById("modal");
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");

openModalButton.addEventListener("click", function () {
  modal.style.display = "block";
  modal.style.backgroundColor = "rgba(147, 42, 42, 0.5)";
  modal.style.position = "fixed";
  modal.style.top = "5%";
  modal.style.left = "60%";
  modal.style.width = "40%";
  modal.style.height = "20%";
  modal.style.borderRadius = "10px";
  modal.style.padding = "10px";
  modal.syle.textAlign = "center";
});

closeModalButton.addEventListener("click", function () {
  modal.style.display = "none";
  closeModalButton.style.backgroundColor = "red";
  closeModalButton.style.color = "white";
  closeModalButton.style.padding = "10px";
  closeModalButton.style.cursor = "pointer";
  closeModalButton.style.borderRadius = "50%";
});

// Form validation
const form = document.getElementById("myForm");
const submitButton = document.getElementById("submit");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const submitError = document.getElementById("submitError");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  let error = false;
  let errorMessage = "";

  if (nameInput.value.length < 3) {
    error = true;
    nameError.textContent = "Name must be at least 3 characters long. ";
  } else {
    nameInput.style.border = "1px solid green";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    error = true;
    emailError.textContent = "Invalid email format.";
  } else {
    emailError.textContent = "";
  }

  const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passwordPattern.test(passwordInput.value)) {
    error = true;
    passwordError.textContent =
      "Password must be at least 8 characters long, contain at least one uppercase letter and one number.";
  } else {
    passwordError.textContent = "";
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    error = true;
    confirmPasswordError.textContent = "Passwords do not match.";
  } else {
    confirmPasswordError.textContent = "";
  }

  if (error) {
    submitError.textContent = errorMessage;
  } else {
    submitError.textContent = "Form submitted successfully!";
    submitError.style.color = "green";
  }
});

// Add a dropdown menu that displays a custom message when the selected option changes (onchange).
const dropdown = document.getElementById("dropdown");
dropdown.addEventListener("change", function () {
  const selectedOption = dropdown.options[dropdown.selectedIndex].text;
  const message = document.getElementById("optionmessage");
  message.textContent = "You selected: " + selectedOption;
});
