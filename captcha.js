// Select the elements
const captchaContainer = document.querySelector(".captchA");
const captchaInput = document.getElementById("captchB");
const loginButton = document.querySelector(".ram");

// Function to generate a random captcha
function generateCaptcha() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let captcha = "";
  //for loop is for deciding captcha length
  for (let i = 0; i < 5; i++) { 
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  captchaContainer.textContent = captcha;
}
const refreshIcon = document.querySelector(".refresh-icon");

refreshIcon.addEventListener("click", () => {
  generateCaptcha(); 
});


// Generate the initial captcha
generateCaptcha();

// Add an event listener to the captcha input
captchaInput.addEventListener("input", () => {
  loginButton.disabled = captchaInput.value !== captchaContainer.textContent;
});

// Add an event listener to the login button
loginButton.addEventListener("click", () => {
  if (captchaInput.value === captchaContainer.textContent) {
    // Proceed with login logic
    console.log("Captcha correct, proceed with login");
    // Replace with your actual login logic
  } else {
    alert("Incorrect captcha");
    generateCaptcha(); // Refresh the captcha
    captchaInput.value = ""; // Clear the input field
  }
});
