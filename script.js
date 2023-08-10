let preloader = document.querySelector(".preloader");
let offline = document.querySelector(".offline");
let contactBox = document.getElementById("contact");

setInterval(check, 1000);
function check() {
  let status = navigator.onLine;
  if (!status) {
    offline.style.display = "block";
  } else {
    offline.style.display = "none";
  }
}
window.addEventListener("load", function () {
  preloader.style.display = "none";
});

function contactSection() {
  let contactBtn = document.getElementById("contactBtn");
  contactBox.style.display = "flex";
}
function closeContact() {
  contactBox.style.display = "none";
}
function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "anonymousbhai302@gmail.com",
    Password: "(#Anonymousbhai302)",
    To: "anonymousbhai302@gmail.com",
    From: document.getElementid("Email").value,
    Subject: "From YourPortfolio",
    Body: `Name: ${document.getElementid("name").value}
    Phn: ${document.getElementid("Phn").value}
    Message: ${document.getElementid("message").value}`,
  }).then((message) => alert(message));
}
