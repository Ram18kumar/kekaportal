// const loginbutton=document.querySelector(".ram");
// async function getlogin(){
  
//   //alert(captchaInput.textContent);

//   fetch("https://mobapp.nijatech.com/employee/login", {
//     method: "POST",
//     mode: 'cors',
//     headers: {
//       "Content-type": "application/json"
//     },
//     body: JSON.stringify({
//       username: 'SG0108',
//       userpassword: "12345",
//       completed: false
//     }),
//   })
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error('Network response was not OK'); // Handle network errors
//     }
//     return response.json();
//   })
//   .then((data) => {
//     if (data.success || data.isLoggedIn || data.status === 'success') { // Check for success indicator
//       // Redirect to index1.html
//       window.location.href = 'index1.html';
//     } else {
//       // Handle login failure
//       console.error('Login failed:', data);
//       // Provide feedback to the user (e.g., display an error message)
//     }
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//     // Handle other errors, such as parsing or network issues
//   });
  
// }
// fetch("https://mobapp.nijatech.com/employee/login", {
//   method: "POST",
//   mode: 'cors',
//   headers: {
//     "Content-type": "application/json"
//   },

//   body: JSON.stringify({
//     username: 'SG0108',
//     userpassword: "12345",
//     completed: false
//   }),
 
// })

//  .then((response) => console.log(response.json()));
  // if (response.ok) {
  //   window.location.href="captcha.html"
  //  }
  // .then(response=>{
  //   if(response.ok){
  //     window.location.href="index1.html"
  //   }
  //   else{ 
  //     alert("please enter valid details");}
    
   
  //   return response.json();             
  // })
// .then(response => response.json())
// .then(data => {
//   .then(response => response.json())
//   .then(data => {
//     console.log('User created!', data);
//   })
//   .catch(error => {
//     console.error('Error creating user:', error);
//   });
  
//   console.log('User created!', data);
// })
// .catch(error => {
//   console.error('Error creating user:', error);
// });

// }
 






// const captchaContainer = document.querySelector(".captchA");
// const captchaInput = document.getElementById("captchB");


// Function to generate a random captcha
// function generateCaptcha() {
//   const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   let captcha = "";
//   //for loop is for deciding captcha length
//   for (let i = 0; i < 5; i++) { 
//     captcha += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//   captchaContainer.textContent = captcha;
// }
// const refreshIcon = document.querySelector(".refresh-icon");

// refreshIcon.addEventListener("click", () => {
//   generateCaptcha(); 
// });

// // Generate the initial captcha
// generateCaptcha();

// if(captchaInput===""){
//   alert("Enter Captcha")
// }
// else if(captchaContainer!= captchaInput){
//    alert("Please enter valid captcha")
// }
