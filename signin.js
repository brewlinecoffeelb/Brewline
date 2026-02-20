import { getAuth, signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const auth = getAuth();

document.addEventListener("DOMContentLoaded", () => {

  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const message = document.getElementById("message");
  const loginBtn = document.getElementById("loginBtn");

  loginBtn.addEventListener("click", () => {

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!email || !password) {
      message.style.color = "red";
      message.innerText = "Please enter email and password.";
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        window.location.href = "index.html";
      })
      .catch((error) => {
        message.style.color = "red";
        message.innerText = error.message;
      });

  });

});
