
document.addEventListener("DOMContentLoaded", function() {
    const dateInput = document.getElementById("date-input");
    const timeSlotSelect = document.getElementById("time-slot-select");
    const slAdultInput = document.getElementById("sl-adult-input");
    const slChildInput = document.getElementById("sl-child-input");
    const foreignerAdultInput = document.getElementById("foreigner-adult-input");
    const foreignerChildInput = document.getElementById("foreigner-child-input");
    const infantInput = document.getElementById("infant-input");
    const durationSelect = document.getElementById("duration-select");
    const summaryTable = document.getElementById("summary-table");
    const continueBtn = document.getElementById("continue-btn");
  
    // Function to calculate charges based on selected options
    function calculateCharges() {
      const slAdultCount = parseInt(slAdultInput.value) || 0;
      const slChildCount = parseInt(slChildInput.value) || 0;
      const foreignerAdultCount = parseInt(foreignerAdultInput.value) || 0;
      const foreignerChildCount = parseInt(foreignerChildInput.value) || 0;
      const infantCount = parseInt(infantInput.value) || 0;
      const duration = parseInt(durationSelect.value) || 0;
  
      const slAdultPrice = 4;
      const slChildPrice = 2;
      const foreignerAdultPrice = 10;
      const foreignerChildPrice = 5;
      const infantPrice = 0;
  
      const timeSlot = timeSlotSelect.value;
      const isPeakHour = timeSlot.includes("Peak");
  
      const slAdultTotal = slAdultCount * (isPeakHour ? 6 : slAdultPrice);
      const slChildTotal = slChildCount * (isPeakHour ? 3 : slChildPrice);
      const foreignerAdultTotal = foreignerAdultCount * (isPeakHour ? 13 : foreignerAdultPrice);
      const foreignerChildTotal = foreignerChildCount * (isPeakHour ? 8 : foreignerChildPrice);
      const infantTotal = infantCount * infantPrice;
  
      const totalPayable = (slAdultTotal + slChildTotal + foreignerAdultTotal + foreignerChildTotal + infantTotal) * duration;
  
      return {
        slAdultTotal,
        slChildTotal,
        foreignerAdultTotal,
        foreignerChildTotal,
        infantTotal,
        totalPayable
      };
    }
  
    // Function to update the summary table
    function updateSummaryTable() {
      const selectedDate = dateInput.value;
      const selectedTimeSlot = timeSlotSelect.value;
      const selectedDuration = durationSelect.value;
      const selectedGuests = [
        { category: "SL Adult", count: parseInt(slAdultInput.value) || 0 },
        { category: "SL Child", count: parseInt(slChildInput.value) || 0 },
        { category: "Foreigner Adult", count: parseInt(foreignerAdultInput.value) || 0 },
        { category: "Foreigner Child", count: parseInt(foreignerChildInput.value) || 0 },
        { category: "Infant", count: parseInt(infantInput.value) || 0 }
      ];


      var totalGuest = selectedGuests.map(function(obj){
        return obj.category + ":" + obj.count;
      })
  
      const charges = calculateCharges();
  
      // Update the summary table
      summaryTable.innerHTML = `
      <tr>
      <th colspan="2" class="title1">Ticket Summary </th>
      </tr>
        <tr>
          <th>Date</th>
          <td>${selectedDate}</td>
        </tr>
        <tr>
          <th>Time Slot</th>
          <td>${selectedTimeSlot}</td>
        </tr>
        <tr>
          <th>Duration</th>
          <td>${selectedDuration}</td>
        </tr>
        <tr>
          <th>Tickets</th>
          <td>Count</td>
        </tr>
        ${selectedGuests.map(guest => `
          <tr>
            <th>${guest.category}</th>
            <td>${guest.count}</td>
          </tr>
        `).join("")}
        <tr>
          <th>Total Payable</th>
          <td>${charges.totalPayable}$</td>
        </tr>
      `;
  
      // Store data in local storage
      localStorage.setItem("selectedDate", selectedDate);
      localStorage.setItem("selectedTimeSlot", selectedTimeSlot);
      localStorage.setItem("selectedDuration", selectedDuration);
      localStorage.setItem("selectedGuests", JSON.stringify(selectedGuests));
      localStorage.setItem("totalPayable", charges.totalPayable);
      localStorage.setItem("totalGuest", totalGuest);

      
  
      // Enable or disable the continue button
      continueBtn.disabled = totalPayable === 0;
    }
  
    // Event listeners for input changes
    dateInput.addEventListener("change", updateSummaryTable);
    timeSlotSelect.addEventListener("change", updateSummaryTable);
    slAdultInput.addEventListener("input", updateSummaryTable);
    slChildInput.addEventListener("input", updateSummaryTable);
    foreignerAdultInput.addEventListener("input", updateSummaryTable);
    foreignerChildInput.addEventListener("input", updateSummaryTable);
    infantInput.addEventListener("input", updateSummaryTable);
    durationSelect.addEventListener("change", updateSummaryTable);
    continueBtn.addEventListener("click", handleContinueButtonClick);
  
    // Load values from local storage if available
    const selectedDate = localStorage.getItem("selectedDate");
    const selectedTimeSlot = localStorage.getItem("selectedTimeSlot");
    const selectedDuration = localStorage.getItem("selectedDuration");
    const selectedGuests = JSON.parse(localStorage.getItem("selectedGuests"));
    const totalPayable = localStorage.getItem("totalPayable");
  
    if (selectedDate && selectedTimeSlot && selectedDuration && selectedGuests && totalPayable) {
      dateInput.value = selectedDate;
      timeSlotSelect.value = selectedTimeSlot;
      durationSelect.value = selectedDuration;
      slAdultInput.value = selectedGuests.find(guest => guest.category === "SL Adult").count || 0;
      slChildInput.value = selectedGuests.find(guest => guest.category === "SL Child").count || 0;
      foreignerAdultInput.value = selectedGuests.find(guest => guest.category === "Foreigner Adult").count || 0;
      foreignerChildInput.value = selectedGuests.find(guest => guest.category === "Foreigner Child").count || 0;
      infantInput.value = selectedGuests.find(guest => guest.category === "Infant").count || 0;
  
      updateSummaryTable();
    }
  
    function handleContinueButtonClick() {
      // Redirect to the details page
      window.location.href = "detail.html";
    }
  
  });
  
  
  