function handleBooking(event) {
  event.preventDefault();

  let name = document.getElementById("bname").value;
  let email = document.getElementById("bemail").value;
  let destination = document.getElementById("bdestination").value;
  let note = document.getElementById("bnote").value;

  if (!destination) {
    alert("Silakan pilih tempat tujuan terlebih dahulu.");
    return false;
  }

  let currentTime = new Date().toLocaleString();

  let resultHTML = `
    <h4>Booking Confirmed!</h4>
    <p><strong>Time:</strong> ${currentTime}</p>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Destination:</strong> ${destination}</p>
    <p><strong>Note:</strong> ${note || "-"}</p>
  `;

  document.getElementById("bookingResult").innerHTML = resultHTML;

  document.getElementById("bookingForm").reset();

  return false;
}
