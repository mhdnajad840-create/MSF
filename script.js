// default password
if (!localStorage.getItem("pass")) {
  localStorage.setItem("pass", "1234");
}

function login() {
  const input = document.getElementById("password").value;
  const real = localStorage.getItem("pass");
  const msg = document.getElementById("msg");

  if (input === real) {
    msg.style.color = "lightgreen";
    msg.textContent = "Unlocked!";
    setTimeout(() => {
      window.location.href = "home.html";
    }, 1000);
  } else {
    msg.style.color = "red";
    msg.textContent = "Wrong password";
  }
}

function forgot() {
  window.location.href = "admin.html";
}
