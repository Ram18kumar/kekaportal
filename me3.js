
const currentDate = document.querySelector(".Current_date");                                    
const prevIcon = document.querySelector(".bi-chevron-left");
const nextIcon = document.querySelector(".bi-chevron-right");
const daysTag = document.querySelector(".calendardiv .days");

let date = new Date();                                               
let currYear = date.getFullYear();
let currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const superCalendar = () => {
    let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
    let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
    let liTag = "";

    // super previous month's days  //put last month days in light mode
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
        liTag += `<li class="inactive">${lastDateOfMonth - i}</li>`;  
    }

    // Render current month's days
    for (let i = 1; i <= lastDateOfMonth; i++) {
        let isActive = i === date.getDate() && currMonth === date.getMonth() && currYear === date.getFullYear() ? "onactive" : "";
        liTag += `<li class="${isActive}">${i}</li>`;
    }
    for (let i = 1; i <= 42 - (lastDateOfMonth + firstDayOfMonth); i++) {

    // Render next month's days
        liTag += `<li class="inactive">${i}</li>`;
    }

    currentDate.textContent = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
};

superCalendar();

prevIcon.addEventListener("click", () => {
    currMonth--;
    if (currMonth < 0) {
        currMonth = 11;
        currYear--;
    }
    superCalendar();
});

nextIcon.addEventListener("click", () => {
    currMonth++;
    if (currMonth > 11) {
        currMonth = 0;
        currYear++;
    }
   superCalendar();
});

//for to select date
const leaevreq=document.getElementById("wrapper");
const selectdate=document.getElementById("sltdt");
function openleavereq(){
    leaevreq.style.display="block";
    leaevreq1.style.display="none";
}


const leaevreq1=document.getElementById("wrapper1");
const selectdate1=document.getElementById("sltdt1");
function openleavereqto(){
    leaevreq.style.display="none";
    leaevreq1.style.display="block";   

}

const dateElements = document.querySelectorAll(".calendardiv .days li");

dateElements.forEach(dateElement => {
    dateElement.addEventListener("click", () => {
        const selectedDate = dateElement.textContent.trim(); // Get the selected date
        const selectedMonth = document.querySelector(".Current_date").textContent.trim();

        // Update the selected date and month in the element with id "sltdt"
        document.getElementById("sltdt").textContent = `${selectedDate} ${selectedMonth}`;
        
        // Open the leave request form
        openleavereq();
    });
});




// FOR CALENDAR2


