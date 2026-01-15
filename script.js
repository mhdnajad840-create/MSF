// 🔐 Set default password only once
const DEFAULT_PASS = "MNJDMN";

if (!localStorage.getItem("pass")) {
  localStorage.setItem("pass", DEFAULT_PASS);
}

function login() {
  const inputPass = document.getElementById("password").value.trim();
  const storedPass = localStorage.getItem("pass");
  const messageBox = document.getElementById("msg");

  if (inputPass !== storedPass) {
    messageBox.style.color = "red";
    messageBox.textContent = "❌ Wrong password";
    return;
  }

  messageBox.style.color = "lightgreen";
  messageBox.textContent = "✅ Unlocked!";

  setTimeout(() => {
    window.location.href = "home.html";
  }, 1000);
}

function forgot() {
  window.location.href = "admin.html";
}

