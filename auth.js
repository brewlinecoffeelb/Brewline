import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getAuth, 
  onAuthStateChanged, 
  signOut 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 🔥 PASTE YOUR REAL FIREBASE CONFIG FROM signin.html HERE
const firebaseConfig = {
  apiKey: "AIzaSyBI4OeO3oLFfWNFKRIGP2KOieusg80qZzA",
  authDomain: "brewline-auth.firebaseapp.com",
  projectId: "brewline-auth",
  storageBucket: "brewline-auth.firebasestorage.app",
  messagingSenderId: "408447180405",
  appId: "1:408447180405:web:1a3f0a04324e50e4baa23c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

  const navSignIn = document.getElementById("navSignIn");
  const navProfile = document.getElementById("navProfile");
  const btnLogout = document.getElementById("btnLogout");

  onAuthStateChanged(auth, (user) => {
  if (user) {
    if (navSignIn) navSignIn.classList.add("hidden");
    if (navProfile) navProfile.classList.remove("hidden");
  } else {
    if (navSignIn) navSignIn.classList.remove("hidden");
    if (navProfile) navProfile.classList.add("hidden");
  }
});

  if (btnLogout) {
    btnLogout.addEventListener("click", () => {
      signOut(auth).then(() => {
        window.location.href = "index.html";
      });
    });
  }
