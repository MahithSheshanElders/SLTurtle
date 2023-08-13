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
  
  });
  
   // Form validation
   var paymentForm = document.getElementById('paymentForm');
   paymentForm.addEventListener('input', function() {
     var cardNumber = document.getElementById('cardNumber').value;
     var expiryDate = document.getElementById('expiryDate').value;
     var cvc = document.getElementById('cvc').value;
     var nameOnCard = document.getElementById('nameOnCard').value;
     
  
     if (cardNumber.value==="") {
      alert("");
       return false;
       
     } 

     if (expiryDate.value==="") {
      alert("");
      return false;
   }
   if (cvc.value==="") {
    alert("");
    return false;
 }
 if (nameOnCard.value==="") {
  alert("");
  return false;
}

document.getElementById("payButton").disabled=false;

});
  
   // Handle form submission
   paymentForm.addEventListener('submit', function(event) {
     event.preventDefault();
     // Perform payment processing and redirect to confirmation page
     window.location.href = 'confirm.html';
   });
  
  
  
  
  