document.addEventListener("DOMContentLoaded", function() {
    const currentDate1 = document.querySelector(".Current_date1");
    const prevIcon1 = document.querySelector(".icons1 .bi-chevron-left");
    const nextIcon1 = document.querySelector(".icons1 .bi-chevron-right");
    const daysTag1 = document.querySelector(".calendardiv1 .days1");
    const selectDateElement = document.getElementById("selectdate1");

    let date1 = new Date();
    let currYear1 = date1.getFullYear();
    let currMonth1 = date1.getMonth();

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const superCalendar1 = () => {
        let firstDayOfMonth1 = new Date(currYear1, currMonth1, 1).getDay();
        let lastDateOfMonth1 = new Date(currYear1, currMonth1 + 1, 0).getDate();
        let liTag1 = "";

     
        for (let i = firstDayOfMonth1 - 1; i >= 0; i--) {
            liTag1 += `<li class="inactive">${lastDateOfMonth1 - i}</li>`;  
        }

       
        for (let i = 1; i <= lastDateOfMonth1; i++) {
            let isActive = i === date1.getDate() && currMonth1 === date1.getMonth() && currYear1 === date1.getFullYear() ? "onactive" : "";
            liTag1 += `<li class="${isActive}">${i}</li>`;
        }
        
  
        for (let i = 1; i <= 42 - (lastDateOfMonth1 + firstDayOfMonth1); i++) {
            liTag1 += `<li class="inactive">${i}</li>`;
        }

        currentDate1.textContent = `${months[currMonth1]} ${currYear1}`;
        daysTag1.innerHTML = liTag1;

       
        const dateElements = document.querySelectorAll(".calendardiv1 .days1 li");
        dateElements.forEach(dateElement => {
            dateElement.addEventListener("click", () => {
                const selectedDate = dateElement.textContent.trim(); 
                const selectedMonth = months[currMonth1];

                // Update the text content of the "Select date" element
                selectDateElement.textContent = `${selectedDate} ${selectedMonth}`;

                // Open the leave request form
                openleavereqto();
            });
        });
    };

    superCalendar1();

    prevIcon1.addEventListener("click", () => {
        currMonth1--;
        if (currMonth1 < 0) {
            currMonth1 = 11;
            currYear1--;
        }
        superCalendar1();
    });

    nextIcon1.addEventListener("click", () => {
        currMonth1++;
        if (currMonth1 > 11) {
            currMonth1 = 0;
            currYear1++;
        }
        superCalendar1();
    });
});
