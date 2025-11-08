window.onload = function () {
  const welcome = document.getElementById("welcome");
  const name = prompt("Masukkan nama kamu:");

  if (name && welcome) {
    welcome.innerText = `Hi ${name}, Welcome to RevoU Travel!`;
  }
};

function handleSubmit(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let birthdate = document.getElementById("birthdate").value;
  let gender = document.querySelector('input[name="gender"]:checked').value;
  let message = document.getElementById("message").value;
  let currentTime = new Date().toLocaleString();

  if (!name || !birthdate || !gender || !message) {
    alert("Harap isi semua kolom!");
    return false;
  }

  let card = document.createElement("div");
  card.className = "card text-white bg-success mb-3 shadow";
  card.style.maxWidth = "22rem";
  card.innerHTML = `
    <div class="card-header d-flex justify-content-between align-items-center">
      <span>Pesan dari ${name}</span>
      <button class="btn btn-sm btn-light text-danger" onclick="this.closest('.card').remove()">✖</button>
    </div>
    <div class="card-body">
      <h5 class="card-title">Data Diri</h5>
      <p class="card-text mb-1"><strong>Waktu:</strong> ${currentTime}</p>
      <p class="card-text mb-1"><strong>Tanggal Lahir:</strong> ${birthdate}</p>
      <p class="card-text mb-1"><strong>Jenis Kelamin:</strong> ${gender}</p>
      <p class="card-text"><strong>Pesan:</strong> ${message}</p>
    </div>
  `;

  const container = document.getElementById("card-container");
  container.prepend(card);

  document.getElementById("contactForm").reset();

  return false;
}

