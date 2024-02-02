//getting coreesponding elements form html by their class name
//const currentDateElement=document.querySelector(".sath h1");
//const currentTimeElement=document.querySelector(".theen h1");
//getting dateand time regarding to user local zone
//const localtimezone=Intl.DateTimeFormat.resolvedoptions().timezone;
// Get elements for date and time display
const currentDateElement = document.querySelector(".sath h1");
const currentTimeElement = document.querySelector(".theen h1");
const getlocaluser=Intl.DateTimeFormat;

// Function to update time and date
function updateTimeAndDate() {
  const now = new Date();

  // Get current date and time in user's local time zone
  const formattedDate = now.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const formattedTime = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit", // Include seconds
    hour12: true,
  });

  // Update the elements with the current date and time
  currentDateElement.textContent = formattedDate;
  currentTimeElement.textContent = formattedTime;
}

// Call the update function initially
updateTimeAndDate();

// Set an interval to update every second
setInterval(updateTimeAndDate, 1000);



//FOR POPUP
  let popup=document.getElementById("popup");


  function openPopup(){
       popup.classList.add("open-popup");
  }
  function closePopup(){
    popup.classList.remove("open-popup");
  }


  //EMPLOYEE ON LEAVE TODAY


  
  // Array of employee data

  
function toggleSubmenu() {
  const submenu = document.getElementById("submenu");
  if (submenu.style.display === "block") {
    submenu.style.display = "none";
  } else {
    submenu.style.display = "block";
  }
}

// Call toggleSubmenu() when hovering over the "Me" link
const meLink = document.querySelector("nav a[href='me.html']");
meLink.addEventListener("mouseover", toggleSubmenu);

// Keep the submenu open when hovering over its items
const submenuItems = document.querySelectorAll("#submenu li");
submenuItems.forEach(item => {
  item.addEventListener("mouseover", () => {
    submenu.style.display = "block";
  });
});


// const worldcupPopup = document.getElementById('worldcup');
// const requestLeaveButton = document.querySelector('.blbtn button');

// requestLeaveButton.addEventListener('click', () => {
//   worldcupPopup.classList.add('open-worldcup');
// });
// worldcupPopup.classList.add('open-worldcup');
// const closeIcon = document.querySelector('.worldcup img');

// closeIcon.addEventListener('click', () => {
//   worldcupPopup.classList.remove('open-worldcup');
// });









function INDIA(){
  document.getElementById('INDIA').style.display='block';
  document.getElementById('SA').style.display='none';
}
function SA(){
  document.getElementById('INDIA').style.display='none';
  document.getElementById('SA').style.display='block';
}




function myFunction() {
  var x = document.getElementById("dropdownans");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}



// const userData = JSON.parse(your_json_string);


// let paps=document.getElementById("#avvapappu");
// //for popup view employee
// function keerthana(){
//     paps.classList.add("avvapappu1");
// }
// function keerthana1(){
//   paps.classList.remove("avvapappu1");
// }


function openkeerthana() {
  const popup = document.querySelector(".avvapappu");
  popup.style.display = "block"; // Show the popup
}

function closekeerthana() {
  const popup = document.querySelector(".avvapappu");
  popup.style.display = "none"; // Hide the popup
}



// Optional: Add click event listener for accessibility
const dropdownToggle = document.querySelector('.dropdown-toggle');
dropdownToggle.addEventListener('click', () => {
  const dropdownContent = document.querySelector('.dropdown-content');
  dropdownContent.classList.toggle('show');
});
function showDropdown() {
  const dropdownMenu = document.querySelector(".dropdown-menu");
  dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
}
