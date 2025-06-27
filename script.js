function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("show");
}

function sendMessage(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  alert(`Thanks, ${name}! Your message was sent.`);
  document.getElementById("contact-form").reset();
}
