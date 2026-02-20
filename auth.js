import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getAuth, 
  onAuthStateChanged, 
  signOut 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 🔥 PASTE YOUR REAL FIREBASE CONFIG FROM signin.html HERE
const firebaseConfig = {
  apiKey: "PASTE_HERE",
  authDomain: "PASTE_HERE",
  projectId: "PASTE_HERE",
  storageBucket: "PASTE_HERE",
  messagingSenderId: "PASTE_HERE",
  appId: "PASTE_HERE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", () => {

  const navSignIn = document.getElementById("navSignIn");
  const navProfile = document.getElementById("navProfile");
  const btnLogout = document.getElementById("btnLogout");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      if (navSignIn) navSignIn.style.display = "none";
      if (navProfile) navProfile.style.display = "inline-block";
    } else {
      if (navSignIn) navSignIn.style.display = "inline-block";
      if (navProfile) navProfile.style.display = "none";
    }
  });

  if (btnLogout) {
    btnLogout.addEventListener("click", () => {
      signOut(auth).then(() => {
        window.location.href = "index.html";
      });
    });
  }

});
