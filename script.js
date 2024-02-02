// function openmicro() { ... } // Unchanged

const loginbutton = document.querySelector(".btn");
loginbutton.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  getlogin(); // Proceed with login logic, including captcha validation
});
// const NAME="SG0108";
// const PWD="12345";
document.getElementById("input").value = "";
document.getElementById("input1").value = "";


async function getlogin() {
  


  const enteredCaptcha = captchaInput.value;

  // Validate captcha before sending login request
  if (captchaContainer.textContent !== enteredCaptcha) {
    alert("Invalid captcha ");
    return;
  }
  //declare username value
  const username = document.getElementById("input").value; // Get username from input field
  const userpassword = document.getElementById("input1").value; // Get password from input field

  try {
    const response = await fetch("https://mobapp.nijatech.com/employee/login", {
      method: "POST",
      mode: 'cors',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        userpassword: userpassword,
        completed: false
      })
    });

    if (!response.ok) {
      throw new Error('Network response was not OK');
    }

    const data = await response.json();
    console.log(data);
    
    if (data.status === true) {
      
      localStorage.setItem('token', data.token); 

      console.log(data);
      window.location.href = 'index1.html';
    }
   
    else if(username!="SG0108"&&userpassword=="12345") {
      // Handle invalid credentials
      console.error('Invalid credentials:', data);
      alert("Invalid username or password");
      
    }
  } catch (error) {
    console.log(data);
    console.error('Error:', error);
    alert("An error occurred. Please try again.");
  }
  // console.log(data);
      // return response.json();   
        
}

// ... CAPTCHA code (unchanged)
const captchaContainer = document.querySelector(".captchA");
const captchaInput = document.getElementById("captchB");

   
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

// Assuming a button triggers the login:
// loginbutton.addEventListener("click", getlogin());



