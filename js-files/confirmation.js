document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the stored data from local storage
    var selectedDate = localStorage.getItem("selectedDate");
    var selectedTimeSlot  = localStorage.getItem("selectedTimeSlot");
    var selectedDuration = localStorage.getItem("selectedDuration");
    var slAdultInput = localStorage.getItem("slAdultInput");
    var totalPayable = localStorage.getItem("totalPayable");
    var fullName= localStorage.getItem("fullName");
    var mobileNumber=localStorage.getItem("mobileNumber"); 
    var email=localStorage.getItem("email");
    var totalGuest=localStorage.getItem("totalGuest")
    var selectedGuests=localStorage.getItem("selectedGuests");

    
  
    // Display the retrieved data in the summary table
    document.getElementById("summary-date").textContent = selectedDate;
    document.getElementById("summary-time").textContent = selectedTimeSlot ;
    document.getElementById("summary-duration").textContent = selectedDuration;
    document.getElementById("summary-tickets").textContent = totalGuest ;
    document.getElementById("summary-total").textContent = totalPayable;
  
    // Display the retrieved data in the customer details table
    document.getElementById("customer-name").textContent = fullName;
    document.getElementById("customer-date").textContent = selectedDate;
    document.getElementById("customer-time").textContent = selectedTimeSlot ;
    document.getElementById("customer-duration").textContent = selectedDuration ;
    document.getElementById("customer-mobile").textContent = mobileNumber;
    document.getElementById("customer-email").textContent = email;
});

