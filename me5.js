// Add event listener to each date element
// Add click event listeners to each date element in the calendar
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







