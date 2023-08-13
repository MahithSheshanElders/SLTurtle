document.addEventListener("DOMContentLoaded", function() {
  const summaryTable = document.getElementById("summary-table");
  const selectedDate = localStorage.getItem("selectedDate");
  const selectedTimeSlot = localStorage.getItem("selectedTimeSlot");
  const selectedDuration = localStorage.getItem("selectedDuration");
  const totalPayable = localStorage.getItem("totalPayable");

  document.getElementById("selected-date").textContent = selectedDate;
  document.getElementById("selected-time-slot").textContent = selectedTimeSlot;
  document.getElementById("selected-duration").textContent = selectedDuration;
  document.getElementById("total-payable").textContent = totalPayable;

  const detailsForm = document.getElementById("details-form");
  const fullNameInput = document.getElementById("full-name-input");
  const mobileNumberInput = document.getElementById("mobile-number-input");
  const emailInput = document.getElementById("email-input");
  const confirmEmailInput = document.getElementById("confirm-email-input");
  const genderSelect = document.getElementById("gender-select");
  
  detailsForm.addEventListener("input", function() {
    const fullName = fullNameInput.value.trim();
    const mobileNumber = mobileNumberInput.value.trim();
    const email = emailInput.value.trim();
    const confirmEmail = confirmEmailInput.value.trim();
    const gender = genderSelect.value;

    if (fullName.value==="") {
      window.alert("");
       return false;
       
     } 

if (mobileNumber.value==="") {
      alert("");
       return false;
       
     } 

     if (email.value==="") {
      alert("");
       return false;
       
     } 

     if (confirmEmail.value==="") {
      alert("");
       return false;
       
     } 

     if(email!==confirmEmail){
      
      return false;
     }

     

     

    
     document.getElementById("submit-btn").disabled=false;

    
  });

  detailsForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const fullName = fullNameInput.value.trim();
    const mobileNumber = mobileNumberInput.value.trim();
    const email = emailInput.value.trim();
    const gender = genderSelect.value;
    

    // Store user details in local storage
    localStorage.setItem("fullName", fullName);
    localStorage.setItem("mobileNumber", mobileNumber);
    localStorage.setItem("email", email);
    localStorage.setItem("gender", gender);
   
    // Redirect to the payment page
    window.location.href = "payment.html";
  });
});

const phoneInputField = document.querySelector("#mobile-number-input");
const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});